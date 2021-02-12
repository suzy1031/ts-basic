export default function notExistSample() {
  let name = null
  console.log("notExit sample 1:", typeof name, name)

  name = "suga"
  if (name) {
    console.log("notExist sample 3:", "吾輩は猫である。名前は" + name)
  } else {
    console.log("notExist sample 2:", "吾輩は猫である。名前はまだ" + name)

  }

  let age = undefined
  age = 28
  if (age) {
    console.log("notExit sample 6:", "年齢は" + age + "です")
  } else {
    console.log("notExit sample 5:", "年齢は秘密です")
  }
}