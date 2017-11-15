class Defs {
  svg: any;
  defs: any;
  static markerConfig: any = {
    viewBox: "0 0 10 10",
    refX: 7.5,
    refY: 5,
    markerWidth: 7,
    markerHeight: 7,
    orient: "auto"
  }
  static markerSet: Array<any> = [
    {
      id: "link-arrow",
      class: "marker"
    }, {
      id: "link-arrow-hover",
      class: "marker hover"
    }, {
      id: "link-arrow-active",
      class: "marker active"
    }, {
      id: "link-arrow-passed",
      class: "marker passed"
    }, {
      id: "link-arrow-skipped",
      class: "marker skipped"
    }
  ]

  constructor (svg: any) {
    this.svg = svg;
    this.initDefs();
  }

  initDefs () {
    this.defs = this.svg.append("defs")

    Defs.markerSet.forEach((item: any) => {
      let marker = this.defs.append("marker");
      for (let key in Defs.markerConfig) {
        marker.attr(key, Defs.markerConfig[key]);
      }

      for (let key in item) {
        marker.attr(key, item[key]);
      }

      marker.append("path")
        .attr("d", "M 0 0 L 10 5 L 0 10 z");
    });

    let filter = this.defs.append("filter")
      .attr("id", "drop-shadow");

    filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 2).attr("result", "blur");
    filter.append("feOffset").attr("in", "blur").attr("dx", 0).attr("dy", 1).attr("result", "offsetBlur");
    filter.append("feFlood").attr("in", "offsetBlur").attr("flood-color", "#c3c3c3").attr("result", "offsetColor");
    filter.append("feComposite").attr("in", "offsetColor").attr("in2", "offsetBlur").attr("operator", "in").attr("result", "offsetBlur");

    let merge = filter.append("feMerge");
    merge.append("feMergeNode").attr("in", "offsetBlur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

  }

}

export default Defs;