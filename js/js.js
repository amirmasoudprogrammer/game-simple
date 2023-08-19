const games=["سنگ","کاغذ","قیچی"];
const namegame=prompt(" انتخاب کنید: سنگ ,کاغذ , قیچی ");
if (namegame){
    console.log(`انتخاب شما هست: ${namegame}`);
}else {
    console.log("چیزی انتخاب نکردید");
}
const randomgame= Math.floor(Math.random() * 3);
const robtgame= games[randomgame];
console.log(`   انتخاب ربات:  ${robtgame} `)
if (namegame === robtgame){
    console.log(` شما: ${robtgame} و ربات:  ${namegame}`)
    console.log("مساوی شدید")
}else if (namegame === "سنگ"){
    if (robtgame === "کاغذ"){
        console.log("شما باختید")
    }else {
        console.log("شما بردید");
    }

}else if (namegame === "قیچی"){
    if (robtgame === "سنگ"){
        console.log("شما باختید")
    }else {
        console.log("شما بردید");
    }

}else if (namegame === "کاغذ"){
    if (robtgame === "قیچی"){
        console.log("شما باختید")
    }else {
        console.log("شما بردید");
    }

}




