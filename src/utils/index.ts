
export function tempTransfer(temp: number, isCelsius: boolean = true) {
  let res: number 
  if (isCelsius) {
    res = Number((temp - 273.15).toFixed())
  } else {
    res = Number(temp.toFixed())
  }
  return res;
}