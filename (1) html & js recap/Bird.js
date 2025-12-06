import{ Pet } from './Pet.js'
export class Bird extends Pet{
    makeSound(){
        console.log("cit cit cit...")
    }
    makeSound(name){
        console.log(`cit cit cit${name}`)
    }
}