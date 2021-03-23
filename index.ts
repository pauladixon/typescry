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

    let authorizedUser: any {
        firstName: 'paula',
        lastName: 'dixon',
    }

    // but this lacks intellisense as opposed to:
    
    let authorizedUser: {
        firstName: string,
        lastName: string,
    } = {
        firstName: 'paula',
        lastName: 'dixon'
    }
