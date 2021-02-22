let user: {
    readonly firstName: string
} = {
    firstName: 'abby'
}

console.log(user.firstName)

//빈 객체 타입 선언
let danger: {}
danger = {}
danger = []
danger = 2

type Person = {
    name: string
    age: number
}
type Age = number
let age: Age = 55
let driver: Person = {
name: 'James May',
age: age
}

// 타입의 union과 intersection type
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
// Union : Cat과 Dog의 모든 속성을 가질 수 있는 변수를 설정할 수 있다.
let catOrDog: CatOrDogOrBoth = {
    name: "name",
    purrs: false,
    barks: true,
    wags: false
} 

// 이형배열에서의 union사용 
let a = [1, 2, 3] // number[]
var b = ['a', 'b'] // string[]
let d = [1, 'a']  //(string | number)[]
const e = [2, 'b'] // (string | number)[]

// 튜플(Tuple)
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]

// 아래의 표현과 위의 표현은 같다.
let moreTrainFares: ([number] | [number, number])[] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]


// 연습문제 
let a1 = 1042 // number
let b1 = 'apples and oranges' // string
const c1 = 'pineapple' // 'pineapple'
let d1 = [true, true, false] // boolean[]
let e1 = {type: 'ficus'} // { type: string}
let f1 = [1, false] // (number | boolean)[]
const g1 = [3] // number[]
let h1 = null // any

// 연습문제 2
let l: unknown = 4
if (typeof l === 'number'){
    let m = l * 2
    console.log(m)
}