// basic-basic html dan js
// let, const

// const gabisa diubah, bakal error di console
// let bisa diubah
const x = 1
let y = 2
y = 4
console.log(y)

// jika terdapat let dalam suatu function, maka hidupnya hanya dalam scope function itu
if(true){
    var z = 10
    let v = 20
}
console.log(z)

// var bisa distate berkali-kali
var c = 10
var c = 11

// string
let kalimat = "hello"
console.log(kalimat.length)
console.log(kalimat.concat(" test"))

// tanggal
let tanggal = new Date()
console.log(tanggal)

// array
let kumpulanAngka = [1, 2, 3, 4]
kumpulanAngka.push(10) // memasukkan angka "10" dari belakang
console.log(kumpulanAngka)
kumpulanAngka.pop(10) // mengeluarkan angka "10" dari belakang
console.log(kumpulanAngka)

// LOOPING
let angka1 = 10
if(angka1 == 10){
    console.log("sepuluh")
}else{
    console.log("bukan 10")
}

for(let i = 0; i < 10; i++){
    console.log(`I : ${i}`) // print format
}

let j = 0
while(j < 10){
    console.log(`J : ${j}`)
    j++
}

let k = 0
do{
    console.log(`K :${k}`)
    k++
}while(k < 10)

// FUNCTION
function greet(){
    console.log("hello")
}
greet()

const tambah = function(a, b){
    return a + b
}
console.log(tambah(2, 2))

const kali = (a, b) => a * b
console.log(kali(2, 3))

// CLASS
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printData(){
        console.log(`Nama: ${this.name}, Age: ${this.age}`)
    }
}

let orang = new Person("Abdul", 25)
orang.printData()

import{ Pet } from './Pet.js'
let hewan1 = new Pet("BB", 2)
console.log(hewan1.getName())

import{ Bird } from './Bird.js'
import{ Dog } from './Dog.js'
let burung = new Bird("Elang", 60)
let anjing = new Dog("Cihua", 5)

burung.makeSound()
burung.makeSound("Budi")