export default function tupleSample() {
  let response: [number, string] = [200, "ok"]
  // response = [400, "Bad Request", "hogehoge"]
  // response = ["400", "Bad Request"]
  console.log("Array tuple sample 1:", response)

  const girlfriends : [string, ...string[]] = ["kana", "miku", "keiko"]
  girlfriends.push("misa")
  console.log("Array tuple sample 2:", girlfriends)
}