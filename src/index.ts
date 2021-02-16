import { privateEncrypt } from "crypto"

console.log('Hello TypeScript!')

let a = 1 + 2
let b = a + 3

let c = {
    apple: a,
    banana: b
}

let d = c.apple * 4

// 18P ~ 33P
function squareOf(n: number){
    return n * n
}
squareOf(2)
//squareOf('z')

let aa:any = 666
let bb:any = ['danger']
let cc = aa+bb


// unknown type
let aaa: unknown = 30;
// let c = a + b; // unknown type의 값은 + 연산자를 지원하지 않는다.(a 변수의 타입을 정제한 뒤에 기본 사칙연산 사용가능)
// typeof를 사용해서 unknown type의 변수를 정제할 수 있다.
if (typeof a === "number") {
let ddd = a + 10; // number
}

// boolean type
const ccc = true; // 어떤 값이 특정 boolean인지 타입스크립트가 추론하게 만든다.
let eee: true = true;
// let fg: true = false; // error TS2322 'false'type을 'true' type에 할당할 수 없다.


// number type
let fff: 2.218 = 2.218;
// let gh: 2.218 = 10; // error TS2322: '10'타입을 '26.218'타입에 할당할 수 없다.

// bigint type
let aaaa = 1234n; //bigint
const bbbb = 5678n; //bigint
var cccc = aaaa + bbbb; //bigint
let ggg: 100n = 100n;
// let hi: bigint = 100; // 100 type은 bigint 타입에 할당할 수 없다.

// string
let ffff: "john" = "john"; // 'john'
// let g: "john" = "zoe"; // 'zoe'type을 'john'type에 할당할 수 


// symbol
const eeee = Symbol('e') // typeof e
const fffff: unique symbol = Symbol('f') // typeof f


// object
let aaaaa = {
    b: "x"
};

let bbb:{c:{d: string}} = {
    c: {
        d: 'f'
    }
}

let ccccc: { firstName: string, lastName: string } = {
    firstName: "john",
    lastName: "barrowman"
  };

  class Person {
    constructor(
      public firstName: string,
      public lastName: string
    ){}
  }

  ccccc = new Person('matt', 'smith')

  let dd : { firstName: string, lastName?: string} = {
    firstName: "merry"
  }

  let aaaaaa: {
    b: number
    c?:string
    [key: number]: boolean
  }

  aaaaaa = {b: 1} // 인덱스 시그니처로 작성한 인자의 경우, optional 하게 넣어줄 수 있다.
  aaaaaa = {b: 1, c: undefined}
  aaaaaa = {b: 1, c: 'd'}
  aaaaaa = {b: 1, 10: true}

  let airplaneSeatingAssignments: {
    [seatNumber: string]: string
  } = {
    "34D": "Boris Cherny",
    "34E": "Bill Gates"
  };

  let user: {
    readonly firstName: string
  } = {
    firstName: 'abby'
  }