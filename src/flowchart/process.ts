import BaseChart from './baseChart';

class Process extends BaseChart {
  static _name: string = "process";
  static style: any = {
    width: 96,
    height: 50,
    borderRadius: 5,
    stroke: "#46b04a",
    fill: "#fff"
  }

  constructor (option: any) {
    super(Process._name, option);

  }

  drawChart () {
    let left = -Process.style.width / 2;
    let top = -Process.style.height / 2;
    let right = left + Process.style.width;
    let bottom = top + Process.style.height;

    this.group.append("path")
      .attr("d", this.getPath(left, top, right, bottom, Process.style.borderRadius))
      .attr("fill", Process.style.fill)
      .attr("stroke", Process.style.stroke);

  }

  getPath (left: number, top: number, right: number, bottom: number, radius: number = 0) {
    let left1 = left + radius;
    let right1 = right - radius;
    let top1 = top + radius;
    let bottom1 = bottom - radius;

    return ["M" + left + " " + top1, "A" + radius + " " + radius + " 0 0 1 " + left1 + " " + top, "H" + right1, "A" + radius + " " + radius + " 0 0 1 " + right + " " + top1, "V" + bottom1, "A" + radius + " " + radius + " 0 0 1 " + right1 + " " + bottom, "H" + left1, "A" + radius + " " + radius + " 0 0 1 " + left + " " + bottom1, "z"].join("")

  }
}


export default Process;