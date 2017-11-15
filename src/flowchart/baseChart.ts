import getId from '../common/getId';
import {drag} from 'd3-drag';
import {event} from 'd3-selection';

abstract class BaseChart {
  public name: string;
  public group: any;
  public parent: any;
  public id: string;

  constructor (name: string, option: any) {
    this.name = name;
    this.parent = option.parent;

    this.generalGroup();
    this.drawChart();
    this.initDragEvent();
  }

  abstract drawChart (): void;

  initDragEvent () {
    this.group.call(drag().on("start", () => {
    }).on("drag", () => {
      this.group.attr("transform", `translate(${event.x},${event.y})`);
    }).on("end", () => {
    }))
  }

  generalGroup () {
    this.id = getId("flowchart");

    this.group = this.parent.append("g")
      .attr("transform", "translate(50,50)")
      .attr("class", `flowchart ${this.name}`)
      .attr("id", this.id)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      .attr("filter", "url(#drop-shadow)");

  }
}

export default BaseChart;