export default function callBackSample() {
  const url = "https://api.github.com/users/suzy1031"

  const fetchProfile = () => {
    return fetch(url) // 非同期
      .then(response => { // 非同期処理が終わったら
        response.json() // 非同期処理
          .then((json) => {
            console.log("Async Callback sample 1:", json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log("Async Callback sample 2:", profile)
}