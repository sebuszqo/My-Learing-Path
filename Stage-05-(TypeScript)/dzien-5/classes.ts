interface Human {
    name: string;
    surname: string;
    age: number;
}

interface HistoryEntry {
    createdAt: Date;
    event: string;
}

interface HistoryUser {
    history: HistoryEntry[];
}

// @ts-ignore
class PersonX implements Human, HistoryUser {
    name: string;
    age: number;
    surname: string = '';

    // history: string[] = [];

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // showHistory(): void {
    //     console.log(this.history)
    // }

}

const michal = new PersonX('Michał', 20)
console.log(michal)


//
interface HumanWithRole extends Human {
    role: string;
}

// @ts-ignore
class User1 implements Human, HistoryUser {
    age: number;
    name: string;
    surname: string;
    history: HistoryEntry[];

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

}