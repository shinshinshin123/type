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
function myFilter(arr:number[] | string[], predicate) {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
  }

  // 使用例
  const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
  const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

  // エラー例
  myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
  