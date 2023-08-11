type ThrottleParams = {
  leading?: boolean
  trailing?: boolean
}

function throttle(
  func: Function,
  wait: number,
  options: ThrottleParams = { leading: true, trailing: true }
): () => void {
  const context = null

  let args: IArguments | null
  let result: unknown
  let timeout: number | undefined | null
  let previous = 0

  const later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) args = null
  }

  return function () {
    const now = Date.now()
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout as number)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }

    return result
  }
}

type Obj = {
  name: string
  label?: string
}

function obj({ name, label }: Obj) {
  return name.toLocaleUpperCase()
}

function partition<T>(as: T[], predicate: (value: T) => boolean): [T[], T[]] {
  const truthies: T[] = []
  const falseys: T[] = []

  as.forEach(a => {
    if (predicate(a)) truthies.push(a)
    else falseys.push(a)
  })

  return [truthies, falseys]
}

export { throttle, partition }
