// all valid js is valid ts

// notes on void

    function logToConsole(): void {
        console.log('hi')
        return
    }

    // => returns void

// notes on array syntax

    let fruits: string[]
    let food: Array<string>
    let genericArray: Array<string | number | boolean>
    let genTuple: [number, string, boolean]

// notes on object syntax

    let user = {
        firstName: 'paula',
        lastName: 'dixon',
        username: 'pauladixon',
        getUsername: (): string => this.username
    }

// enums are another way to organize data
    
    enum DaysOfTheWeek {
        MONDAY = 'monday',
        TUESDAY, 
        WEDNESDAY
    }

    let dayToday: DaysOfTheWeek
    dayToday = DaysOfTheWeek.MONDAY

    enum Continents {
        North_America,
        South_America,
        Africa,
        Asia,
        Europe,
        Antartica,
        Australia
    }
    
    // usage
    let region = Continents.Africa;


// if you're not ready to specify a type, you can use any

    // let authorizedUser: any {
    //     firstName: 'paula',
    //     lastName: 'dixon',
    // }

    // but this lacks intellisense as opposed to:
    
    let authorizedUser: {
        firstName: string,
        lastName: string,
    } = {
        firstName: 'paula',
        lastName: 'dixon'
    }


// functions with spread

    // where the ? makes an argument optional

    function add(x?: number, y?: number, z?: number): number {
        return x + y + z
    }

    let numbers: Array<number> = [1,2,3]

    console.log(add(...numbers))

// classes

    class Person {
        firstName: string
        lastName: string
        age: number

        constructor(firstName: string, lastName: string, age: number){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
    }

    const person: Person = new Person(`Paula`, `Dixon, 30`)
    console.log(person.getFullName())

    // or

    class Person2 {
        constructor(
            protected firstName: string,
            protected lastName: string,
            protected age: number
        ){}

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
    }

    const person2: Person2 = new Person2(`Paula`, `Dixon, 30`)
    console.log(person.getFullName())


    class Employee extends Person2 {
        constructor(
            private id: number,
            firstName: string, 
            private middleName: string,
            lastName: string,
            age: number
        ) {
            super(firstName, lastName, age)
        }

        getFullName(): string {
            // const nameSegments: Array<string> = super.getFullName().split(' ')
            // nameSegments.splice(1,0,this.middleName)
            // return `${nameSegments[0]} ${nameSegments[1]} ${nameSegments[2]}`
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        }
    }

    const manager: Person2 = new Employee(1, `paula`, `pattison`, `dixon`, 30)
    console.log(`${manager.getFullName()}`)


// interfaces

    interface Human {
        readonly age: number
        walk(): void
    }

    // if a prop is readonly it cannot be assigned again later

    interface Person3 extends Human {
        firstName: string
        lastName?: string
    }

    const user2: Person3 = {
        firstName: ``,
        lastName: ``,
        age: 30,
        walk: () => {
            return
        }
    }

    class Employee2 implements Person3 {
        firstName = ``
        age = 10
        walk(): void {
            return
        }
    }