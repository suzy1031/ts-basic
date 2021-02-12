export default function objectSample() {
  const a: object = {
    name: 'suga',
    age: 28
  }
  // a.name

  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan"
  }

  console.log("Object object sample 1:", country)

  country = {
    language: "English",
    name: "United States of America"
  }

  console.log("Object object sample 2:", country)

  const suga: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: "yanamda",
    firstName: "taro",
  }

  suga.gender = 'male'
  suga.lastName = 'kamado'
  // suga.firstName = 'tanjiro'
  console.log("Object object sample 3:", suga)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'tokyo',
    Korea: 'seoul'
  }

  capitals.China = 'beijing'
  capitals.Canada = 'ottawa'

  console.log("Object object sample 4:", capitals)

}