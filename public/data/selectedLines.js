import centeredLines from "./centeredLines";

export default function selectedLines(num) {
  const data = centeredLines();
  return data.slice(0, num);
}
