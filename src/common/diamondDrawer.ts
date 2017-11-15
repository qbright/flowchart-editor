class DiamondDrawer {
  static generalPath (width: number, height: number) {
    let left = -width / 2;
    let top = -height / 2;
    let bottom = left + width;
    let right = top + height;

    return ["M" + left + " 0", "L0 " + top, "L" + bottom + " 0", "L0 " + right, "z"].join("");

  }

}

export default DiamondDrawer;