export const joinStrings = (classes: string[], joiner = ' ') =>
  classes.join(joiner)

export const memoize = (fn: Function) => {
  const cache = new Map()
  return (...args: any[]) => {
    const key = JSON.stringify(args)
    const value = cache.get(key)
    if (value) {
      return value
    }
    return cache.set(key, fn(...args))
  }
}
