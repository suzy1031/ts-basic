export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("generics basic sample 1:", stringReduce(["May ", "the ", "force ", "be ", "with ", "you"], ""))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("generics basic sample 2:", numberReduce([100, 200, 300], 1000))

  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("generics basic sample 3:", genericStringReduce([" MAKE ", "TYPESCRIPT ", "GREAT ", "AGAIN"], ""))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("generics basic sample 4:", numberReduce([-100, -200, -300], 1000))

  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}