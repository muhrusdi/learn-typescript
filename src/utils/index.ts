export const getDeepValue = <TObj, TFirstKey extends keyof TObj, TSecondKey extends keyof TObj[TFirstKey]>(obj: TObj, firstKey: TFirstKey, secondKey: TSecondKey) => {
  return obj[firstKey][secondKey]
}