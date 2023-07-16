var randomNumber=0;
do randomNumber=Math.floor(Math.random()*9999)
while (randomNumber<1000);
var numberOfTries=0;
var counterOfRandNumbers=1;
var startOfTimeCounting=0;
var timeCounting=false;
setInterval(timeCounter, 1000);

//setting language
const x = navigator.language.toLowerCase();
switch (x.replace("_", "-")) { //such convertions needed, because different systems/browsers return their lang code in different ways
    case "pl": //Polish
    case "pl-pl":
        stringFirstDrawn = "Wylosowano pierwszą liczbę!";
        stringNumberOfTries = "Liczba prób:";
        stringTimePassed = "od pierwszej minęło:";
        stringInputLabel = "Wprowadź 4-cyfrową liczbę";
        stringReset = "Resetuj";
        stringTooSmall = "Wprowadzona liczba jest za mała";
        stringTooBig = "Wprowadzona liczba jest za duża";
        stringDrawn1 = "Wylosowano ";
        stringDrawn2 = ". liczbę!";
        stringYouGuessed = "Zgadłeś/aś!";
        break;
    case "de": //German
    case "de-at":
    case "de-li":
    case "de-lu":
    case "de-de":
    case "de-ch":
        stringFirstDrawn = "Die erste Nummer wurde gezogen!";
        stringNumberOfTries = "Anzahl Versuche:";
        stringTimePassed = "seit dem ersten bestanden:";
        stringInputLabel = "Geben Sie eine 4-stellige Nummer ein";
        stringReset = "Zurücksetzen";
        stringTooSmall = "Die eingegebene Zahl ist zu klein";
        stringTooBig = "Die eingegebene Zahl ist zu groß";
        stringDrawn1 = "Die ";
        stringDrawn2 = ". Nummer wurde gezogen!";
        stringYouGuessed = "Du hast geraten!";
        break;
    case "uk": //Ukrainian
    case "uk-ua":
        stringFirstDrawn = "Перше число витягнуто!";
        stringNumberOfTries = "Кількість спроб:";
        stringTimePassed = "з першої минуло:";
        stringInputLabel = "Введіть 4-значне число";
        stringReset = "Скиньте";
        stringTooSmall = "Введене число занадто мале";
        stringTooBig = "Введене число занадто велике";
        stringDrawn1 = "Випало число №";
        stringDrawn2 = "!";
        stringYouGuessed = "Ви вгадали!";
        break;
    default: //English
        stringFirstDrawn = "The first number has been drawn!";
        stringNumberOfTries = "Number of tries:";
        stringTimePassed = "since the first one passed:";
        stringInputLabel = "Enter a 4-digit number";
        stringReset = "Reset";
        stringTooSmall = "The entered number is too small";
        stringTooBig = "The entered number is too big";
        stringDrawn1 = "The #";
        stringDrawn2 = " number has been drawn!";
        stringYouGuessed = "You guessed!";
        break;
};
function timeCounter(){
    if (timeCounting==false) return -1;
    let seconds=document.getElementById("seconds").innerHTML;
    let minutes=document.getElementById("minutes").innerHTML;
    seconds++;
    if (seconds==60){
        seconds=0;
        minutes++;
    }
    if (seconds<10) document.getElementById("seconds").innerHTML="0"+seconds
    else document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("minutes").innerHTML=minutes;
}


function doAction(){
    let numberEl=document.getElementById("number");
    if (numberEl.value.length != 4) return -1;
    if (numberOfTries==0) timeCounting=true;
    numberOfTries++;
    document.getElementById("numberOfTries").innerHTML=numberOfTries;
    let number=parseInt(numberEl.value); 
    if (number == randomNumber){
        timeCounting=false;
        document.getElementById("messages").innerHTML=stringYouGuessed;
        numberEl.setAttribute('disabled', '');
        numberEl.placeholder="";
        document.getElementById("resetButton").removeAttribute('hidden');
    } else {
        numberEl.value="";
        numberEl.placeholder=number;
    };
    if (number < randomNumber) document.getElementById("messages").innerHTML=stringTooSmall;
    if (number > randomNumber) document.getElementById("messages").innerHTML=stringTooBig;
        
    };

    function doReset(){
        document.getElementById("resetButton").setAttribute('hidden', '');
        document.getElementById("number").value="";
        do randomNumber=Math.floor(Math.random()*9999)
        while (randomNumber<1000);
        counterOfRandNumbers++;
        document.getElementById("messages").innerHTML=stringDrawn1+counterOfRandNumbers+stringDrawn2;
        document.getElementById("number").removeAttribute('disabled');
        numberOfTries=0;
        document.getElementById("numberOfTries").innerHTML="0";
        document.getElementById("seconds").innerHTML="00";
        document.getElementById("minutes").innerHTML="0";
    }