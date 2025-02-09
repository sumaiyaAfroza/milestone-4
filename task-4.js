let grade = 80;
let friend = 80;

if (grade > 80){
    if (friend > 80){
        console.log( " then go to lunch ")
    }
    else if(friend < 80 && friend >= 60){
        console.log("good luck next time")
    }
    else if ( friend < 60 && friend >= 40){
        console.log("keep your friend")
    }
    else if ( friend < 40) {
        console.log("block your friends msz unseen")
    }
}

else (grade < 80) {
    console.log("sleep and act sad")

}