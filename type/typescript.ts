//boolean
let isCool: boolean = true

//number
let age: number = 56;

//string
let eyeColor: string = 'brown'
let favouriteQuote: string = `I'm not old, I'm only ${age}`

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

//Object
let wizard: object = {
    a: 'John'
}

//null and undefined
let meh: undefined = undefined
let noo: null = null

//Tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: number = Size.Small
console.log(sizeName)

// Any - !!!!!!!!!!!!!!!! BE CAREFUL
let whatever: any = 'aghhhhhhhhhh nooooooooo!!!'
whatever = basket

// void
let sing = (): void => {
    console.log('lalalalala')
}

// never
let error = ():never => {
    throw Error('ooops')
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT')
}
