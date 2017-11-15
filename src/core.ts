import "./common/initDrag";

import {select} from 'd3-selection';
import ErrorHandler, {ErrorType} from './common/errorHandler';
import getId from './common/getId';
import Start from './flowchart/start';
import FlowType from './common/flowType';
import Defs from './flowchart/defs';
import Process from './flowchart/process';
import ForkChart from './flowchart/fork';
import JoinChart from './flowchart/join';


class Core {
  public container: any;
  public cWidth: number = 800;
  public cHeight: number = 600;
  public flowSet: Array<any> = [];
  public flowChartIndex: number = 0;
  public svg: any;
  defs: Defs;

  constructor (containerSelector: string, config?: any) {
    this.initContainer(containerSelector);
    this.defs = new Defs(this.svg);
  }

  initContainer (selector: string) {

    let container = select(selector);
    if (!container.size()) {
      ErrorHandler.throwError(ErrorType.CONTAINER_NO_FIND);
    }
    this.container = container;

    let {width, height} = this.container.node().getBoundingClientRect();

    width && (this.cWidth = width);
    height && (this.cHeight = height);

    this.svg = this.container.append("svg")
      .attr("id", getId("flowchart"))
      .attr("width", this.cWidth)
      .attr("height", this.cHeight)
      .style("border", "1px solid black");


  }

  insertFlow (type: FlowType, option: any = {}) {
    let chart;

    let defopt = {
      parent: this.svg
    }

    let opt = Object.assign(option, defopt);

    switch (type) {
      case FlowType.START:
        chart = new Start(opt);
        break;
      case FlowType.PROCESS:
        chart = new Process(opt);
        break;
      case FlowType.FORK:
        chart = new ForkChart(opt);
        break;
      case FlowType.JOIN:
        chart = new JoinChart(opt);
        break;

    }
    if (chart) {
      this.flowSet.push(chart);
    }
  }


}


export default Core;
