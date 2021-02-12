export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC' ) {
    console.log('Function parameters sample 1: User is signed in!', username)
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in.', username)
    return false
  }
}

export const isUserSignedIn2 = (userId: string, username: string = "NO NAME"): boolean => {
  if (userId === 'ABC' ) {
    console.log('Function parameters sample 3: User is signed in!', username)
    return true
  } else {
    console.log('Function parameters sample 4: User is not signed in.', username)
    return false
  }
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}
// reduceメソッド
// 0 + 100 = 100
// 100 + 200 = 300
// 300 + 300 = 600
// 600 + 400 = 1000
// 1000 + 500 = 1500