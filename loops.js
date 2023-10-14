/*
    this challenge file was created, so that i could write the code off my heart without
    using any code refrences, include visual studio snippets
*/

// how to write a for loop that prints my name 10 times

for(i=0;i<10;i++){
    console.log("fardowsa")
}

// how to write for a loop that prints my surname10 times
let count = 0;
while(count<10){
    console.log("Mohamed")
    count++
}

// use else if statement to print what i do
let today = "Friday";

if (today == "Saturday"){
    console.log("Come to coding school")
} else if(today == "Sunday"){
    console.log("Sleep")
} else if(today == "Monday"){
    console.log("go to school")
} else {
    console.log("Do whatever you like")
}

// use switch statement to print what i do
switch (today) {
    case "Saturday":
        console.log("Coding time...")
        break;
        
        case "Sunday":
        console.log("Sleep time")
        break;

        case "Monday":
        console.log("Monday")
        break;

    default:
        console.log("Free time")
        break;
}

do {
    console.log("Noor")
    count++;
} while (count < 10);