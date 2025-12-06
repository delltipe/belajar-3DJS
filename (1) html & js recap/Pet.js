export class Pet{
    #name
    #age
    constructor(name, age){
        this.#name = name
        this.#age = age
    }

    getName(){
        return this.#name
    }
    setName(name){
        this.#name = name
    }

    getAge(){
        return this.#age
    }
    setAge(age){
        this.#age = age
    }

    makeSound(){
        console.log("animal makes sound")
    }
}