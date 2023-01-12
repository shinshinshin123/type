//Normal問題

//1
//正解
// type Tuple = [number, null, string]
// const nums:Tuple = [1, null, "Hello"]


//2
// type Func = {
//     number: second,
// }

//正解
// type Func = {
//     (func:()=>void,second:number):string
// }

//4
//正解
// const func = () : Promise<boolean> => {
//     return new Promise((resolve) => {
//       resolve(true)
//     });
// }

//5
//正解
// type User = {
//     id:string,
//     name:string,
//   }

//   type Post = {
//     id:string,
//     title:string,
//     content:string,
//   }

//   type UserWithPosts = User & { posts:Post[] }

//   const userWithPosts : UserWithPosts = {
//     id: "aaa",
//     name: "bob",
//     posts : [
//       {
//         id: "aaa",
//         title: "hoge",
//         content: "fuga"
//       },
//       {
//         id: "bbb",
//         title: "hoge2",
//         content: "fuga2"
//       }
//     ]
// }

//6
// type Post = {
//     id:string,
//     title:string,
//     index:number
//   }

//   type Comments = {
//     id:string,
//     title:string,
//     content:string,
//     wordCount:number
//   }

//   type PostWithComments = Post & { comments:Comments[] }

//   const postWithComments:PostWithComments = {
//     id:"aaa",
//     title:"testPost",
//     index:1,
//     comments:[
//       {
//       id:"aaa",
//       title:"hoge",
//       content:"fuga",
//       wordCount:4
//       },
//       {
//       id:"bbb",
//       title:"hoge2",
//       content:"fuga2",
//       wordCount:4
//       }
//     ]
//   }


//7
// type TodoInput = {
//     id: string,
//     name: string,
//     dueDate: string | null,
//     isDone: boolean
// }

//正解
// type TodoInput = {
//     id: string,
//     name: string,
//     dueDate: string,
//     description: string,
//     isDone: Readonly<boolean>
// }

//8,９問目がないので飛ばします。

//10
// const user = { id: 3, name: "bob"}
// type UserKey = typeof user[ keyof typeof user ]

//11
//正解
// const user = { id: 3, name: "bob"} as const
// type UserKey = keyof typeof user
// type UserValue = typeof user[UserKey]

//12
// const fruits = ["apple","orange", "lemon"] as const;
// type FruitsType = typeof fruits[string];
// FruitsType = ""apple"" | ""orange"" | ""lemon"" となるように変換してください"


//13
// type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

// const printLearningLanguage = (lang: CurriculumLanguage): never => {
// switch (lang) {
//     case "JavaScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "TypeScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "React":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     default:
//         throw new Error(`${lang}はカリキュラムにない言語です`);
//   }
// }

//正解
// type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

// const printLearningLanguage = (lang: CurriculumLanguage) => {
// switch (lang) {
//     case "JavaScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "TypeScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "React":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     default:
//     // const neverValue: never = lang
//     const neverValue: never = lang
//         throw new Error(`${lang}はカリキュラムにない言語です`);
//   }
// }

// こうすると以下のようなエラーが表示され、実装漏れに気づくことが可能となる
// (parameter) lang: "Go"
// Argument of type 'string' is not assignable to parameter of type 'never'.


//解説
// tsconfigにて、noUnusedLocalsをfalseにすることで以下のコードに書き換えれば、エラーが表示されなくなる

// type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

// const printLearningLanguage = (lang: CurriculumLanguage) => {
// switch (lang) {
//     case "JavaScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "TypeScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "React":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "Go":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     default:
//     const neverValue: never = lang
//         throw new Error(`${lang}はカリキュラムにない言語です`);
//   }
// }

//14
// type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

// const printLearningLanguage = (lang: CurriculumLanguage) => {
// switch (lang) {
//     case "JavaScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "TypeScript":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     case "React":
//       console.log(`I'm learnig ${lang}`);
//       break;
//     default:
//         const neverValue: never = lang
//         throw new Error(`${lang}はカリキュラムにない言語です`);
//   }
// }

//正解
// class ExhaustiveError extends Error {
//     constructor(value: never, message = `${value}はカリキュラムにない言語です`) {
//         super(message);
//       }
// }

// class ExhaustiveError extends Error {
//     constructor(value: never, message = `${value}はカリキュラムにない言語です`) {
//         super(message);
//     }
// }

//     type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

//     const printLearningLanguage = (lang: CurriculumLanguage) => {
//     switch (lang) {
//         case "JavaScript":
//           console.log(`I'm learnig ${lang}`);
//           break;
//         case "TypeScript":
//           console.log(`I'm learnig ${lang}`);
//           break;
//         case "React":
//           console.log(`I'm learnig ${lang}`);
//           break;
//         default:
//             throw new ExhaustiveError(lang);
//       }
//     }

// こうすると以下のようなエラーが表示され、実装漏れに気づくことが可能となる
// (parameter) lang: ""Go""
// Argument of type 'string' is not assignable to parameter of type 'never'


//15
// const func1 = (x: string | number) => {
//     if (typeof x === "number") {
//         console.log(x.toString())
//     }
//     if (typeof x === "string") {
//       console.log(x.length)
//     }
// }

//正解
// const func2 = (x: number | number[]) => {
//     if (typeof x === "number") {
//         console.log(x.toString())
//     }
//     if (typeof x === "object") {
//         console.log(x.map( (x) => x*2 ) )
//     }
// }


//16
//正解
// type Person = {
//     name : string,
//     age : number,
//     email? : string
// }

// const getEmail = (person : Person):string | undefined => {
//     if ("email" in person) {
//         return person.email
//     } else {
//         return undefined
//     }
// }

//17
// type Success = { isSuccess: true, message:string };
// type Failure = { isSuccess: false, error: string };

// const res = (res: Success | Failure) => {
//     if ("isSuccess" in res) {
//         console.log("message")
//     } else {
//         console.log("error")
//     }
// }

//正解
// const res = (res: Success | Failure) => {
//     if ("isSuccess" in res) {
//        if (res.isSuccess === true) {
//           console.log(res.message)
//        } else {
//           console.log(res.error)
//        }
//     }
// }

//18
// const func = async () =>{
//     try{
//       await fetch("http://a.com")
//     }catch(error){
//       if (error === Object) {
//         console.log(error);
//       }
//     }
// }

// const func = async () =>{
//     try{
//       await fetch("http://a.com")
//     }catch(error){
//       if (typeof error === "object") {
//         console.log(error);
//       }
//     }
// }

//19
// const func = async () =>{
//     try{
//         await fetch("http://a.com")
//     }catch(error){
//       if (error instanceof Error) {
//         console.log(error.message)
//       }
//     }
// }


//20
//正解
// class HttpError extends Error {
//     //ここにclassを作ってください
//     status?:number
//   }

//   const func = async () =>{
//     try{
//         await fetch("http://a.com")
//     }catch(error){
//         if(error instanceof HttpError) {
//             if(error.status === 404) {
//                 console.log(error.status)
//             }
//         }
//     }
// }

//解説
// extendsで Error型を拡張する

// instanceof で型ガード

//21
// class HttpError extends Error {
//     //ここにclassを作ってください
//     status?:number
// }

// const func = async () =>{
//     try{
//       await fetch("http://a.com")
//     }catch(error){
//       if ("HttpError" in error) {
//         if(error.status){
//            console.log(error.status)
//         }
//       }
//     }
// }

//正解
// const func = async () =>{
//     try{
//       await fetch("http://a.com")
//     }catch(error){
//       if (error instanceof HttpError) {
//         if("status" in error){
//            console.log(error.status)
//         }
//       }
//     }
// }

//22
// const getString = (x:unknown): x is string => {
//     return typeof x === "string"
//   }

//   const func = (x:unknown):string => {
//     if(getString(x)){
//       return x
//     }else{
//       return ""
//     }
// }

//23 //問題がないので飛ばす

//24
// type Person  = {
//     name:string
//     age:number,
//     email:string
//   }

// type NewPersonProps = Pick<Person, "name" | "age" >

//25
// type Person  = {
//     name:string
//     age:number,
//     email:string
//   }

// type NewPersonProps = Omit<Person, "name" | "email">

//26
// type Person  = {
//     readonly name:string
//     readonly age:number,
//     readonly email:string
// }

//正解
// type Person  = {
//     name:string,
//     age:number,
//     email:string,
// }

// type NewPerson = Readonly<Pick<Person, "name" | "email" >>

//27
// type Person  = {
//     name:string
//     age:number,
//     email:string
// }

// type NewPerson = Pick<Person, "name" | "age">
//正解
// type NewPerson = Partial<Pick<Person, "name" | "age">>

//28
// type Person  = {
//     name:string,
//     age:number,
//     email:string
// }

// type NewPerson = Readonly<Pick<Person, "email">>
//正解
// type NewPerson = Readonly<Omit<Person, "email">>

//29
// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email: string,
//     address: string
// }

//もっと短くかける
// type Person = Record<"firstName" | "lastName" | "age" | "email" | "address", string>;

// type PersonName = Pick<Person, "firstName" | "lastName">
// type PersonInfo = Pick<Person, "age" | "email" | "address">


//30
//正解
// let stringNumberObject:{
//     [age:string]:number
// }
// stringNumberObject = {age:36} //ok
// stringNumberObject.age = 36 //ok
// stringNumberObject["age"] = 36 //ok
// stringNumberObject["age"] = "36" //error

//31
// let stringNumberObject: {
//     [age:string]:number
// }
//正解
// let stringNumberObject: Record<string,number>;

// stringNumberObject = {age:36} //ok
// stringNumberObject.age = 36 //ok
// stringNumberObject["age"] = 36 //ok
// stringNumberObject["age"] = "36" //error

//32
// type Keys = "javascript" | "python"
// type Obj = {[Kyes in string]:string}
//正解
// type Obj = {[Kye in Keys]:string}


//33
//正解
// type Data<T> = {
//     id: number
//     payload : T,
//   }

//   const data1: Data<number> ={
//     id: 1
//     payload: 2
//   }

//   const data2: Data<string> ={
//     id: 1
//     payload: "hoge"
//   }

//   const data3: Data<{name:string}> ={
//     id: 1
//     payload: {
//         name: "bob"
//       }
// }


//34
//正解
// type Data<T>= {
//     id:number,
//     message: T,
// }

// const data1: Data<string> ={
//   id: 1
//   message: "hoge"
// }

// const data2: Data<string[]> ={
//   id: 2
//   message: ["foo", "bar"]
// }

//35
// function func (x:string | number) {
//     return x
//   }

//   const str = func<string>("a")
//   const num = func<number>(1)

//正解
// function func<T> (x:T):T {
//     return x
//   }

//   const str = func<string>("a")
//   const num = func<number>(1)

//36
//正解
// type Person = {
//     name : string,
//     age : number,
// }

// const getAge = <T extends Person>(person:T):number=>{
//     return person.age
// }

// const age = getAge<Person>({name:"taro",age:20})
