
export function tempTransfer(temp: number, metric: string = 'celsius') {
  let res: number 
  if (metric === 'celsius') {
    res = Number((temp - 273.15).toFixed())
  } else {
    res = Number(temp.toFixed())
  }
  return res;
}