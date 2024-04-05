// soal 1

const totalBelanja = (hargaBelanjaan) => {
    if (hargaBelanjaan >= 100_000) {
        return hargaBelanjaan-(hargaBelanjaan*20/100)
    }
    else{
        return hargaBelanjaan
    }
}

console.log(totalBelanja(100000) , " ==> total harga")


//soal 2
const vocalUpperCase = (text) =>{
    const lowerCase = text.toLowerCase()
    const splitText = lowerCase.split("")
    for(let i = 0; i<splitText.length; i++){
        if(splitText[i] == "a" || splitText[i] == "i" || splitText[i] == "u" || splitText[i] == "e" || splitText[i] == "o"){
            splitText[i] = splitText[i].toUpperCase()
        }
    }
    return splitText.join("")
}
const vocalUpperCase2 = (text) => {
    const lowerCase = text.toLowerCase()
    const splitText = lowerCase.split("")
    const rules = ["a","i","u","e","o"]
    for(let i = 0; i<splitText.length; i++){
        if(rules.includes(splitText[i])){
            splitText[i] = String.fromCharCode(splitText[i].charCodeAt(0)+1).toUpperCase()
        }
    }
    return splitText.join("")
}

console.log(vocalUpperCase("febri"))
console.log(vocalUpperCase2("Aiueo"))


//soal 3
const firtAndLastChar = (text) => {
    const first = text[0]
    const last = text[text.length-1]
    return text.length == 0 ? "0" : first+last
}
console.log(firtAndLastChar(""));


//soal 4
const stringLoop = (text, count) => {
    let arrayText = []
    for (let i = 0; i < count; i++) {
        arrayText.push(text);
    }
    return arrayText.join("")
}
console.log(stringLoop("nandA", 3));


//soal 5
const randomNumber = () => {
    return Math.floor( Math.random() * (6 - 1 + 1) +1)
}
console.log(randomNumber());