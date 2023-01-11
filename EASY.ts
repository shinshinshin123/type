//EASY問題

//1
// let isShow:boolean = true
// let isEditing:boolean = false

// import { type } from "os";


//2
// let count:number = 15
// let num:number = 2
// let float:number = 2.33


//3
// let firsName:string = 'tarou'
// let lastName:string = "Yamada"
// let englishName:string = `mad`


//4
// let isShow:boolean = true
// let count:number = 15
// let firstName:string = 'tarou'


//5
// let x:null = null


//6
// let y:undefined = undefined


//7
// let x:any = "hello"
// x = 1
// x = undefined
// x = []


//8
// let x:never;
// x = 1 // Type 'number' is not assignable to type 'never'
// x = undefined // Type 'undefined' is not assignable to type 'never'
// x = "never" // Type 'string' is not assignable to type 'never'"


//9
// 例
// type IsShow = boolean
// let isShow : IsShow = true

// 型エイリアスを使って型エラーを解消しよう
// type Count = number
// let count : Count = 15;

// type FirstName = string
// let firstName : FirstName = 'tarou'

//___
// type LastName = string
// let lastName:LastName = "suzuki"


//10
// let isShow = true;
// let count = 15;
// let firstName = 'tarou'

// 推論された型に合う値を入れてください
// isShow = 
//正解
// isShow = false

// count = 11
// firstName = "しんのすけ"


//11
// type Person = {
//     name: string
//     age: number
// }
//正解
// type Person = {
//     name: string,
//     age: number
// }

// const taro : Person = { name : 'tarou', age : 30}
// const jiro : Person = { name : 'jiro', age : 22}


//12
// type Person = {
//     name: string,
//     age: number,
//     email: any
// }
//正解
// type Person = {
//     name: string,
//     age: number,
//     email: string | undefined
// }

// const taro: Person = {
//     name: 'tarou',
//     age: 30,
//     email: undefined
// }
// const jiro: Person = {
//     name: 'jiro',
//     age: 22,
//     email: "jiro@code-lesson.com"
// }


//13
// type Person = { name: string, age: number, email?: string}

// const taro :Person = { name : 'tarou', age : 30}
// const jiro :Person = { name : 'jiro', age : 22, email: "jiro@code-lesson.com" }

//14
//正解
// type BasicInfo = {
//     name: string
//     age: number
//   }
  
//   type AdditionalInfo = {
//     email: string
//   }
  
//   const person: BasicInfo & AdditionalInfo = {
//     name: 'taro',
//     age: 20,
//     email: 'taro@taro.com'
//   }

//15
//正解
// type Fruits = string[]
// const fruits:Fruits = ["apple", "orange", "lemon"]

// type Nums = number[]
// const nums:Nums = [1, 2, 3]

//16
// const main = (num:number) => {
//     return num + num
//    }
// console.log(main(15)) //30

//17
// const func1 = (str:string):string => "hello" +str

//正解
// const func2 = (str:string):string[] => ["hello"].push(str)
// const func3 = (str:string):void => console.log("hello"+str)

//18
//正解
// const func1:(num:number) => number = (num) => num*2
// const func2:(num:number) => string = (num) => num+"px"

//19
// type Hello = "hello"
// const hello :Hello = "hello"

//20
// type NumberOrString  = number | string
// const num :NumberOrString = 1
// const str :NumberOrString = "1"

//21
// type Fruit = "apple" | "orange" | "lemon"// stringは使わない

// const fruit1 : Fruit = "apple"
// const fruit2 : Fruit = "orange"
// const fruit3 : Fruit = "lemon"

//22
// type Person = {
//     readonly name:string,
//     readonly age:number,
//     readonly email:string
// }

//23
// const LANGUAGE= {
//     ENGLISH : "ENGLISH",
//     JAPANESE : "JAPANESE",
//     CHINESE : "CHINESE"
// } as const;

// console.log(LANGUAGE.JAPANESE)

//24
// let isShow= true
// let count = 15
// const firstName = 'tarou'
// const sports = ["tennis", "soccer"]
// const user = {id:1, name:"jiro"}

// type IsShow = typeof Boolean
// type Count = number
// type FirstName = string
// type Sports = string[]
// type User = string | number

//正解
// type IsShow = typeof isShow
// type Count = typeof count
// type FirstName = typeof firstName
// type Sports = typeof sports
// type User = typeof user

//25
// const func = (x: unknown) => {
//     const str:string = x as string
//     const num:number = x as number
//     const bool:boolean = x as boolean
// }

//26
// const func1 = (x: string | null) => {
//     const str:string = x as string
//   }
//   const func2 = (x: number | undefined) => {
//     const num: number = x as number
// }

//27
//正解
// const func1 = (x: string | null) => {
//     const str:string = x!
//   }
//   const func2 = (x: number | undefined) => {
//     const num: number = x!
// }

//28
// const func1 = (x: string | null) => {
//     console.log(x?.length)
//   }
//   const func2 = (x: number | undefined) => {
//     console.log(x?.toString())
//   }

//29
// type Person = {
//     name?: string,
//     age?: number,
//     email?: string
// }

//30
// type Person = {
//     name? : string,
//     age? : number,
//     email? : string
//   }

//   const person:Person = {}
//正解
// const person: Required<Person> = {
//     name: "もも",
//     age: 11,
//     email:"aaa@example.com"
// }

//31
// type Person  = {
//     name:string
//     age:number,
//     email:string
//   }
  
//   type Name = Pick<Person, "name">;

//32
// type Person  = {
//     name:string
//     age:number,
//     email:string
//   }

// type NewPerson = Omit<Person, "name">;

//33
// type Person  = {
//     readonly name:string,
//     readonly age:number,
//     readonly email:string
// }

//正解
// type Person  = {
//     name:string,
//     age:number,
//     email:string
// }

// type PersonReadonly = Readonly<Person>

//34
// type TypeA = number | string | null

// type NewType = Extract<TypeA, number | null>;

//正解
// type TypeA = number | string
// type TypeB = number | number[] | null

// type NewType = Extract<TypeA,TypeB>


//35
// type TypeA = number | string | null

// type NewType = Exclude<TypeA, string>;


//36
// const func = (a: string, b: string) => {
//     return a + b;
// }

// type TypeA = Parameters<func a | b>
//正解
// type TypeA = Parameters<typeof func>

//37
// const func = () => {
//     return {
//       name: "taro",
//       age: 25,
//       email: "taro@example.com"
//     }
//   }
//   type Person = ReturnType<typeof func>
