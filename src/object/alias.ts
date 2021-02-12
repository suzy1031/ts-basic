export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'tokyo',
    language: 'japanese',
    name: 'Japan'
  }

  console.log("Object alias sample 1:", japan)

  const america: Country = {
    capital: 'washington D.C',
    language: 'english',
    name: 'united states of america'
  }

  console.log("Object alias sample 2:", america)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardの型
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り'
  }

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール'
  }

  console.log("Object alias sample 3:", adventurer1)
  console.log("Object alias sample 4:", adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール'
  }

  console.log("Object alias sample 5:", paladin)


}