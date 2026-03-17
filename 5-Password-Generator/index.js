const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?","/"];

let firstInBox = document.getElementById("first-inbox")
let secondInBox = document.getElementById("second-inbox")

function generatebtn() {

    let firstPassword = ""
    for (let i = 0; i < 12; i++) {
        let firstRandomNumber = Math.floor(Math.random() * characters.length)
        firstPassword += characters[firstRandomNumber]
        firstInBox.textContent = firstPassword
    }


    let secondPassword = ""
    for (let i = 0; i < 12; i++) {
        let secondRandomNumber = Math.floor(Math.random() * characters.length)
        secondPassword += characters[secondRandomNumber]
        secondInBox.textContent = secondPassword
    }
}

function firstcopy() {
    let firstPasswordCopy = firstInBox.textContent

    if ( firstPasswordCopy === "" ) {
        alert("Generate Password First")
        return
    }

    navigator.clipboard.writeText(firstPasswordCopy)
    alert("Copied")
}

function secondcopy() {
    let secondPasswordCopy = secondInBox.textContent

    if ( secondPasswordCopy === "" ) {
        alert("Generate Password First")
        return
    }

    navigator.clipboard.writeText(secondPasswordCopy)
    alert("Copied")
}

// #WrI@[+@5#x:, VE#[C^JBVC5) u{ZfI`}p`<}z E:X}i;62,t@L