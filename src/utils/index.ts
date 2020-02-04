/**
 * 摄氏度/华氏转换
 * @param temp 温度
 * @param metric 度量单位
 */
export function tempTransfer(temp: number, metric: string = 'celsius') {
  let res: number 
  if (metric === 'celsius') {
    res = Number((temp - 273.15).toFixed())
  } else {
    res = Number((1.8 * (temp - 273.15) + 32).toFixed())
  }
  return res;
}

/**
 * 防抖函数
 * @param fn 
 * @param delay 
 */
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

export function add0(num: number) : string{
  return num > 9 ? `${num}` : `0${num}`
}

export function getDuration(time: number) {
  time = time / 1000;
  let s = Math.floor(time % 60);
  let m = Math.floor(time / 60);
  return `${add0(m)}:${add0(s)}`
}
