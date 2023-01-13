//TypeScriptの型演習

//1
// function isPositive(num:number) {
//     return num >= 0;
// }

//別解
// function isPositive(num:number):boolean {
//     return num >= 0;
// }

// 使用例
// isPositive(3);

// エラー例
// isPositive('123');
// const numVar: number = isPositive(-5);

//2
// function showUserInfo(user: User) {
//    // 省略
// }

// 使用例
// showUserInfo({
//     name: 'John Smith',
//     age: 16,
//     private: false,
// });

// エラー例
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });
// const user: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };

//正解
// interface User {
//     name: string;
//     age: number;
//     praivate: boolean;
// }

//別解
// type User = {
//     name: string;
//     age: number;
//     praivate: boolean;
// };


//3

// const isPositive: IsPositiveFunc = num => num >= 0;

//正解
// type IsPositiveFunc = (arg: number) => boolean;

//別解
// interface IsPositiveFunc {
//     (arg: number): boolean;
// }

// 使用例
// isPositive(5);

// エラー例
// isPositive('foo');
// const res: number = isPositive(123);


//4
// function sumOfPos(arr:number) {
//     return arr.filter((num:number) => num >= 0).reduce((acc:number, num:number) => acc + num, 0);
// }

//正解
// function sumOfPos(arr: number[]): number {
//     return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
// }

//別解
// function sumOfPos(arr: Array<number>): number {
//     return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
// }

// 使用例
// const sum: number = sumOfPos([1, 3, -2, 0]);

// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);


//5
// function myFilter(arr:number[] | string[], predicate) {
//     const result = [];
//     for (const elm of arr) {
//       if (predicate(elm)) {
//         result.push(elm);
//       }
//     }
//     return result;
//   }

//正解
// function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
//     const result = [];
//     for (const elm of arr) {
//       if (predicate(elm)) {
//         result.push(elm);
//       }
//     }
//     return result;
//   }


// 使用例
//   const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
//   const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// エラー例
//   myFilter([1, 2, 3, 4, 5], str => str.length >= 4);


//6
// type Speed = "slow" | "medium" | "fast" ;

// function getSpeed(speed: Speed): number {
//   switch (speed) {
//     case "slow":
//       return 10;
//     case "medium":
//       return 50;
//     case "fast":
//       return 200;
//   }
// }

// // 使用例
// const slowSpeed = getSpeed("slow");
// const mediumSpeed = getSpeed("medium");
// const fastSpeed = getSpeed("fast");

// // エラー例
// getSpeed("veryfast");

//7
// declare addEventListener(foobar:string)
//正解
// interface addEventListenerOptionObject {
//     capture?: boolean;
//     once?: boolean;
//     passive?: boolean;
// }

// declare function addEventListener(
//     type: string,
//     handler: () => void,
//     options?: boolean | addEventListenerOptionObject
// ): void;


// 使用例
// addEventListener("foobar", () => {});
// addEventListener("event", () => {}, true);
// addEventListener("event2", () => {}, {});
// addEventListener("event3", () => {}, {
//   capture: true,
//   once: false
// });

// エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });


//8
// function giveId(obj) {
//     const id = "本当はランダムがいいけどここではただの文字列";
//     return {
//       ...obj,
//       id
//     };
//   }

//正解
// function giveId<T>(obj: T): T & { id: string } {
//     const id = "本当はランダムがいいけどここではただの文字列";
//     return {
//       ...obj,
//       id
//     };
//   }

//   // 使用例
//   const obj1: {
//     id: string;
//     foo: number;
//   } = giveId({ foo: 123 });
//   const obj2: {
//     id: string;
//     num: number;
//     hoge: boolean;
//   } = giveId({
//     num: 0,
//     hoge: true
//   });

//   // エラー例
//   const obj3: {
//     id: string;
//     piyo: string;
//   } = giveId({
//     foo: "bar"
//   });

import {useState} from "react";

//9
// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState, setNumState] = useState(0);

// setNumStateは新しい値で呼び出せる
setNumState(3);

// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);

// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState<number | null>(null);
setAnotherState(100);

// エラー例
setNumState('foobar');
