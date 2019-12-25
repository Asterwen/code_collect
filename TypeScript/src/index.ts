function greeter(person: string) :string {return person+ 'Hello'}

class Person{
    constructor(public weight: number, public name: string, public born: string){

    }
}
interface Dog {
    name: string
    weight: number
}
let x: Dog
x = new Person(120,'Aster','1992-12-2')

let a1 = (a: number) => 0;
let a2 = (b: number, s: string) => 0;
//缺少类型 无法赋值  
// a1 = a2  
a2 = a1

let foo = (x: number, y: number) => {}
let bar = (x?:number, y?:number) => {}
let bas = (...args: number[]) => {}
foo = bas
bas = bar

