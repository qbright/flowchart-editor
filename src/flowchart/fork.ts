import BaseChart from './baseChart';
import DiamondDrawer from '../common/diamondDrawer';

class Fork extends BaseChart {
  static _name: string = "fork";
  static style: any = {
    width: 100,
    height: 72,
    fill: "#fff",
    stroke: "#5783d9"
  }

  constructor (option: any) {
    super(Fork._name, option);
  }

  drawChart () {

    this.group.append("path")
      .attr("d", DiamondDrawer.generalPath(Fork.style.width, Fork.style.height))
      .attr("fill", Fork.style.fill)
      .attr("stroke", Fork.style.stroke);

  }

}

export default Fork;