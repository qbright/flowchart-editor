let idIndex = 0;

export default function (prefix: string = "ychart") {
  return `${prefix}-${idIndex++}`;
}



