export default function promiseSample() {
  const url = "https://api.github.com/users/suzy1031"

  type Profile = {
    login: string
    id: number
  }

  type fetchProfile = () => Promise<Profile | null>

  const fetchProfile: fetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url) // 非同期
    .then(res => { // 非同期処理が終わったら
      res.json() // 非同期処理
        .then((json: Profile) => {
          console.log("Async Promise sample 1:", json)
          resolve(json)
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
    .catch((error) => {
      console.error(error)
      reject(null)
    })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log("Async Promise sample 2:", profile)
      }
    })
    .catch(() => {

    })
}