var score = +prompt("please enter your score:")

if (score <= 20 && score >= 18) {
    console.log("perfecte");
} else if (score < 18 && score >= 15) {
    console.log("very good");
} else if (score < 15 && score >= 10) {
    console.log("good");
}else if (score < 10 && score >= 5) {
    console.log("bad");
} else{
    console.log("need more try");
    
}