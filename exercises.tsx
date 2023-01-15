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
// const [numState, setNumState] = useState(0);

//正解
// type useStateUpdateArgument<T> = T | ((oldValue: T) => T);
// declare function useState<T>(
//   initialValue: T
// ): [T, (updator: useStateUpdateArgument<T>) => void];

// setNumStateは新しい値で呼び出せる
// setNumState(3);

// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
// setNumState(state => state + 10);

// 型引数を明示することも可能
// const [anotherState, setAnotherState] = useState<number | null>(null);
// setAnotherState(100);

// エラー例
// setNumState('foobar');


//10
// function mapFromArray(arr, key) {
//   const result = new Map();
//   for (const obj of arr) {
//     result.set(obj[key], obj);
//   }
//   return result;
// }

//正解
// function mapFromArray<T, K extends keyof T>(arr: T[], key: K): Map<T[K], T> {
//   const result = new Map();
//   for (const obj of arr) {
//     result.set(obj[key], obj);
//   }
//   return result;
// }


// 使用例
// const data = [
//   { id: 1, name: "John Smith" },
//   { id: 2, name: "Mary Sue" },
//   { id: 100, name: "Taro Yamada" }
// ];
// const dataMap = mapFromArray(data, "id");

/*
dataMapは
Map {
  1 => { id: 1, name: 'John Smith' },
  2 => { id: 2, name: 'Mary Sue' },
  100 => { id: 100, name: 'Taro Yamada' }
}
というMapになる
*/

// エラー例
// mapFromArray(data, "age");


//11
//正解
// type MyPartial<T> = { [K in keyof T]?: T[K]};

// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */
// type T1 = MyPartial<{
//   foo: number;
//   bar: string;
// }>;
/*
 * T2は { hoge?: { piyo: number; } } となる
 */
// type T2 = MyPartial<{
//   hoge: {
//     piyo: number;
//   };
// }>;


//12
// interface EventPayloads {
//   start: {
//     user: string;
//   };
//   stop: {
//     user: string;
//     after: number;
//   };
//   end: {};
// }

// class EventDischarger<E> {
//   emit<Ev extends keyof E>(eventName: Ev, payload: E[Ev]) {
//     // 省略
//   }
// }

// 使用例
// const ed = new EventDischarger<EventPayloads>();
// ed.emit("start", {
//   user: "user1"
// });
// ed.emit("stop", {
//   user: "user1",
//   after: 3
// });
// ed.emit("end", {});

// // エラー例
// ed.emit("start", {
//   user: "user2",
//   after: 0
// });
// ed.emit("stop", {
//   user: "user2"
// });
// ed.emit("foobar", {
//   foo: 123
// });


//13

// type reducer = {
//   reduc{}
// }

//正解
// type Action =
//   | {
//     type: "increment";
//     amaount: number;
//   }
//   | {
//     type: "decrement";
//     amaount: number;
//   }
//   | {
//     type: "reset";
//     value: number;
//   };

// const reducer = (state: number, action:Action) => {
//   switch (action.type) {
//     case "increment":
//       return state + action.amount;
//     case "decrement":
//       return state - action.amount;
//     case "reset":
//       return action.value;
//   }
// };

// // 使用例
// reducer(100, {
//     type: 'increment',
//     amount: 10,
// }) === 110;
// reducer(100, {
//     type: 'decrement',
//     amount: 55,
// }) === 45;
// reducer(500, {
//     type: 'reset',
//     value: 0,
// }) === 0;

// // エラー例
// reducer(0,{
//     type: 'increment',
//     value: 100,
// });

//15
// type Func<A, R> = undefined extends A ? (arg?: A) => R : (arg: A) => R;

// // 使用例
// const f1: Func<number, number> = num => num + 10;
// const v1: number = f1(10);

// const f2: Func<undefined, number> = () => 0;
// const v2: number = f2();
// const v3: number = f2(undefined);

// const f3: Func<number | undefined, number> = num => (num || 0) + 10;
// const v4: number = f3(123);
// const v5: number = f3();

// // エラー例
// const v6: number = f1();

//16
// function getFoo(obj: string | number) {
//   return obj.foo;
// }
//正解
// function getFoo<T extends object>(
//   obj: T
//   ): T extends { foo: infer E } ? E : unknown {
//     return (obj as any).foo;
// }


// 使用例
// numはnumber型
// const num = getFoo({
//   foo: 123
// });
// strはstring型
// const str = getFoo({
//   foo: "hoge",
//   bar: 0
// });
// unkはunknown型
// const unk = getFoo({
//   hoge: true
// });

// エラー例
// getFoo(123);
// getFoo(null);


//17
//正解
// function giveId<T>(obj: T): Pick<T, Exclude<keyof T, "id">> & { id: string } {
//   const id = "本当はランダムがいいけどここではただの文字列";
//   return {
//     ...obj,
//     id
//   };
// }

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

//別解
// function giveId<T>(
//   obj: T
// ): { [K in keyof T]: K extends "id" ? string : T[K] } & { id: string } {
//   const id = "本当はランダムがいいけどここではただの文字列";
//   return {
//     ...obj,
//     id
//   } as any;
// }


// 使用例
/*
 * obj1の型は { foo: number; id: string } 型
 */
// const obj1 = giveId({ foo: 123 });
/*
 * obj2の型は { num : number; id: string } 型
 */
// const obj2 = giveId({
//   num: 0,
//   id: 100,
// });
// obj2のidはstring型なので別の文字列を代入できる
// obj2.id = '';

//18
// interface EventPayloads {
//   start: {
//     user: string;
//   };
//   stop: {
//     user: string;
//     after: number;
//   };
//   end: {};
// }

//正解
// type Spread<Ev, EvOring, E> = Ev extends keyof E
//   ? EvOring[] extends Ev[]
//     ? E[Ev]
//     : never
//   : never;

// class EventDischarger<E> {
//   emit<Ev extends keyof E>(eventName: Ev, payload: Spread<Ev, Ev, E> ) {
//     // 省略
//   }
// }

// 使用例
// const ed = new EventDischarger<EventPayloads>();
// ed.emit("start", {
//   user: "user1"
// });
// ed.emit("stop", {
//   user: "user1",
//   after: 3
// });
// ed.emit("end", {});

// // エラー例
// ed.emit<"start" | "stop">("stop", {
//   user: "user1"
// });

//19
// 使用例

// 元のデータ
// interface Data {
//   foo: number;
//   bar: string;
//   baz: string;
// }
/*
 * T1は { foo?: number; bar?: string; baz: string } 型
 */
// type T1 = PartiallyPartial<Data, "foo" | "bar">;

// type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> &
// Pick<T, Exclude<keyof T, K>>

//20
// 使用例
// interface Options {
//   foo: number;
//   bar: string;
//   baz: boolean;
// }

// type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> &
//   Pick<T, Exclude<keyof T, K>>;

// type AtLeastOne<T> = Spread<T, keyof T>;

// type Spread<T, K extends keyof T> = K extends keyof T
//     ? PartiallyPartial<T, Exclude<keyof T, K>>
//     : never;

// function test(options: AtLeastOne<Options>) {
//   const { foo, bar, baz } = options;
//   // 省略
// }
// test({
//   foo: 123,
//   bar: "bar"
// });
// test({
//   baz: true
// });

// // エラー例
// test({});

//21
// type Page =
//   | {
//       page: "top";
//     }
//   | {
//       page: "mypage";
//       userName: string;
//     }
//   | {
//       page: "ranking";
//       articles: string[];
//     };

// type PageGenerators = {
//   [P in Page["page"]]: (page: Extract<Page, { page: P }>) => string
// };

// const pageGenerators: PageGenerators = {
//   top: () => "<p>top page</p>",
//   mypage: ({ userName }) => `<p>Hello, ${userName}!</p>`,
//   ranking: ({ articles }) =>
//     `<h1>ranking</h1>
//          <ul>
//         ${articles.map(name => `<li>${name}</li>`).join("")}</ul>`
// };
// const renderPage = (page: Page) => pageGenerators[page.page](page as any);

//23
// type KeysOfType<Obj, Val> = {
//   [K in keyof Obj]-?: Obj[K] extends Val ? K : never
// }[keyof Obj];

// 使用例
// type Data = {
//   foo: string;
//   bar: number;
//   baz: boolean;

//   hoge?: string;
//   fuga: string;
//   piyo?: number;
// };

// "foo" | "fuga"
// ※ "hoge" は string | undefiendなので含まない
// type StringKeys = KeysOfType<Data, string>;

// function useNumber<Obj>(obj: Obj, key: KeysOfType<Obj, number>) {
//   // ヒント: ここはanyを使わざるを得ない
//   const num: number = (obj as any)[key];
//   return num * 10;
// }

// declare const data: Data;

// // これはOK
// useNumber(data, "bar");
// // これは型エラー
// useNumber(data, "baz");

//24
//正解
// type OptionalKeys<Obj> = {
//   [K in keyof Obj]-?: undefined extends Obj[K] ? K : never
// }[keyof Obj];

// type MapToNever<Obj> = {
//   [K in keyof Obj] : never
// }

// type OptionalKeys<Obj> = PickUndefined<MapToNever<Obj>>

// 使用例
// type Data = {
//   foo: string,
//   bar?: number,
//   baz?: boolean,

//   hoge: undefined,
//   piyo?: undefined,
// };

// "bar" | "baz" | "piyo"
// type T = OptionalKeys<Data>;
