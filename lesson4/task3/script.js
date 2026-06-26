const userYear = prompt("Якого року ви народилися?");
if(userYear !== null){
    `Ваш вік ${2026-userYear}`
}
else {
    alert("Шкода що ви незахотіли ввести свій рік народження.")
}

let userCity = prompt("У якому місті ви проживаєте?");
if(userCity=="Київ"){
userCityMassage = "Ти проживаєш у столиці України.";
}
else if (userCity=="Вашингтон"){
    userCityMassage = "Ти проживаєш у столиці США.";
}
else if (userCity=="Лондон"){
    userCityMassage = "Ти проживаєш у столиці Великої Британії.";
}
else if (userCity) {
    userCityMassage = `Ти проживаєш у місті ${userCity}`;
}
else {
    alert("Шкода що ви незахотіли ввести ваше місце проживання.")
}

const userSport = prompt("Який ваш улюблений вид спорту?");
if(userYear){
    userSportMassage = `Ваш улюблений вид спорту ${userSport}`;
}
else {
    alert("Шкода що ви незахотіли ввести свій рік народження.")
}

alert(`Ваш вік ${userYear}, ${userCityMassage}, ${userSportMassage}`);