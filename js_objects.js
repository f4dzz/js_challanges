
//     let player1 = {
//     firstName : "Fardowsa",
//     lastName : "Nur",
//     age: 17
// }

// let player2 = {
//     firstName: "Ikram",
//     lastName: "Nur",
//     age:10
// }
 
// console.log(player1.firstName)
// console.log(player2.firstName)


// //// // // // 

let player1 = {
    firstName : "Christiano",
    lastName : "Ronaldo",
    age : 38,
    hasKids : true,

    shoot : function () {
        console.log( this.lastName + " shot the ball")
    }
}

console.log(player1.shoot())

