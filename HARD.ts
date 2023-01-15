//Hard問題

//1
// type Person = {
//     name : string,
//     age : number,
//     email? : string
//   }

// const isPerson = (x :unknown): x is Person => {
//     if(typeof x === "object") {
//         const {name, age, email} = x as Person

//     if(typeof name !== "string") {
//         return false
//     }

//     if(typeof age !== "number") {
//         return false
//     }

//     if(typeof email !== "undefined" && typeof email !== "string") {
//         return false
//     }
//   }
//   return true
// }

// const person :Person | string = isPerson({name:"bob",age:22}) ? {name:"bob", age,22} : "notPerson"

//2
// ここにPersonを定義
// const Person =

//正解
// class Person {
//     name: string = "taro"
//     age: number = 29
//     email?: string = "example@exmaple.com"
// }


// const isPerson = (person : unknown ):boolean => {
//   if(person instanceof Person){
//     return  true
//   }else{
//     return false
//   }
// }

//3  〜　//9の問題がないので一旦終了