import {event, select} from 'd3-selection';
import getId from '../common/getId';
import {arc} from 'd3-shape';
import {drag} from 'd3-drag';
import BaseChart from './baseChart';

class Start extends BaseChart {
  static _name: string = "start";
  public group: any;
  public parent: any;
  static style: any = {
    fill: "white",
    stroke: "#fe6f0e",
    strokeWidth: "1.1px"


  }
  innerChart: any;

  constructor (option: any) {
    super(Start._name, option);

    this.initDragEvent();
  }

  drawChart () {
    let arcD = arc()
      .innerRadius(0)
      .outerRadius(30)

    let d = arcD(<any>{
      startAngle: 0,
      endAngle: Math.PI * 2
    });

    this.group.append("path")
      .attr("d", d)
      .attr("stroke", Start.style.stroke)
      .attr("stroke-width", Start.style.strokeWidth)
      .attr("fill", Start.style.fill)
  }

}


export default Start;


