//typescriptのUtility型の再実装してみる。

//以下問題たち

//3
//Utility型のReadonlyを再実装したMyReadonly型を作ってください。
// type Sample1 = Readonly<[number]>;

// type MyReadonly<T> = {
//    readonly [P in keyof T]: T[P];
// };

//4
//Utility型のPartialを再実装したMyPartial型を作ってください。
// type Partial = {
//     id: number;
//     name: string;
//     mainaddress: string;
// };

// type PartialUser = Partial<User>;
//以下のようなものが得られる。
// {
//     id?: number | undefined;
//     name?: string | undefined;
//     mailaddress?: string | undefined;
//  };

// type Admin = {
//     id: string;
//     type: string;
//     user: {
//         id: number;
//         name: string;
//         mailaddress: string;
//     };
// };
// type PartialAdmin = Partial<Admin>

//以下のようになる
// {
//     id?: string | undefined;
//     type?: string | undefined;
//     user?: {
//       id: number;
//       name: string;
//       mailaddress: string;
//     } | undefined;
//   }

// type MyPartial<T> = {
//     [P in keyof T]?: T[P];
// };

//5
//Utility型のRequiredを再実装したMyRequired型を作ってください。
// type PartialUser = {
//     id?: number | undefined;
//     name?: string | undefined;
//     mailaddress?: string | undefined;
//   };
// type User = Required<PartialUser>;

//以下のようになる
// {
//     id: number;
//     name: string;
//     mailaddress: string;
//   };

// type MyRequired<T> = {
//     [P in keyof T]-?: T[P];
// };

//6
//Utility型のPickを再実装したMyPick型を作ってください。
// type User = {
//     id: string;
//     name: string;
//     mailaddress: string;
// };
// type PickedUser = Pick<User,'id' | 'name'>;
//以下のようになる
// {
//     id: string;
//     name: string;
// }

// type MyPick<Type, Keys extends keyof Type> = {
//     [P in Keys]: Type[P];
// };

//7
//Utility型のOmitを再実装したMyOmit型を作ってください。
// type User = {
//     id: string;
//     name: string;
//     mailaddress: string;
//   };
//   type OmitUser = Omit<User, 'mailaddress'>;

//以下のようになる
// {
//     id: string;
//     name: string;
// }

// type MyOmit<Type, Keys extends keyof Type> = {
//    [P in keyof Type as P extends Keys ? never : P]: T[Key]
// };

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

//8
//Utility型のExtractを再実装したMyExtract型を作ってください。
// type Sample01 = Exclude<string | number | (() => void), Function>;

// type MyExclude<Uniontype, Excludememebers> = UnionType extends Excludememebers ? never : UnionType;

//9
//Utility型のExcludeを再実装したMyExclude型を作ってください。
// type Sample01 = Extract<string | number | (() => void), Function | symbol>;

// type MyExtract<Type, Union> = Type extends Union ? Type : never;
