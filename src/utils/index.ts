
export function tempTransfer(temp: number, metric: string = 'celsius') {
  let res: number 
  if (metric === 'celsius') {
    res = Number((temp - 273.15).toFixed())
  } else {
    res = Number((1.8 * (temp - 273.15) + 32).toFixed())
  }
  return res;
}

export function debounce<Params extends any[]>(
  fn: (...args: Params) => any,
  delay: number = 300
) : (...args: Params) => void {
  let timeout: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, delay);
  }
}
