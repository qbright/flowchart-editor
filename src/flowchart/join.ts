import BaseChart from './baseChart';
import DiamondDrawer from '../common/diamondDrawer';

class Join extends BaseChart {
  static _name: string = "join";
  static style: any = {
    width: 42,
    height: 42,
    fill: "#fff",
    stroke: "#c0c0c0"
  }

  constructor (option: any) {
    super(Join._name, option);
  }

  drawChart () {

    this.group.append("path")
      .attr("d", DiamondDrawer.generalPath(Join.style.width, Join.style.height))
      .attr("fill", Join.style.fill)
      .attr("stroke", Join.style.stroke);

  }


}


export default Join;
