function greeter(person: string){
    return "Hello,"+ person
}

const user = "Asterwen"
function warnUser(): void{
    console.log('Get Me1')
    // alert("this is without return")
}
warnUser()

class Animal {
    feet: number 
    constructor(name: string, numFeet: number){
        this.feet = 18
    }
}
class Size {
    feet: number
    constructor(meters: number){
        this.feet = 20
    }
}
let a: Animal
let ss: Size

type Foo = {
    baz: [
        number,
        'xiaomuzhu'
    ];
    toString(): string;
    readonly [Symbol.iterator]: 'github';
    0x1: 'foo',
    "bar": 12n;
}
