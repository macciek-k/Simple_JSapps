var randomNumber=0;
do randomNumber=Math.floor(Math.random()*9999)
while (randomNumber<1000);
var numberOfTries=0;
var counterOfRandNumbers=1;
var startOfTimeCounting=0;
var timeCounting=false;
var resultsHistory=[];
setInterval(timeCounter, 1000);

//setting language
switch (preferedLanguage()) { //remember, that this function is declared in ../common_resources/languageDetecion.js file; don't forget to link that in html file!
    case "pl": //Polish
        stringFirstDrawn = "Wylosowano pierwszą liczbę tej tury!";
        stringNumberOfTries = "Liczba prób:";
        stringTimePassed = "od pierwszej minęło:";
        stringInputLabel = "Wprowadź 4-cyfrową liczbę";
        stringReset = "Resetuj";
        stringTooSmall = "Wprowadzona liczba jest za mała";
        stringTooBig = "Wprowadzona liczba jest za duża";
        stringDrawn1 = "Wylosowano ";
        stringDrawn2 = ". liczbę tej tury!";
        stringYouGuessed = "Zgadłeś/aś!";
        stringHistoryTitle = "Lokalna historia wyników:";
        stringHistoryNumber = "liczba:";
        stringHistoryNumberOfTries = "liczba prób:";
        stringHistoryTime = "czas:";
        stringClear = "Wyczyść";
        stringClearYouSure = "Usunąć historię lokalnych wyników? <nobr>Tej akcji nie będzie można cofnąć</nobr>"
        stringYes = "Tak";
        stringCancel = "Anuluj";
        break;
    case "de": //German
        stringFirstDrawn = "Die erste Nummer dieser Runde wurde gezogen!";
        stringNumberOfTries = "Anzahl Versuche:";
        stringTimePassed = "seit dem ersten bestanden:";
        stringInputLabel = "Geben Sie eine 4-stellige Nummer ein";
        stringReset = "Zurücksetzen";
        stringTooSmall = "Die eingegebene Zahl ist zu klein";
        stringTooBig = "Die eingegebene Zahl ist zu groß";
        stringDrawn1 = "Die ";
        stringDrawn2 = ". Nummer dieser Runde wurde gezogen!";
        stringYouGuessed = "Du hast geraten!";
        stringHistoryTitle = "Lokale Ergebnishistorie:";
        stringHistoryNumber = "Nummer:";
        stringHistoryNumberOfTries = stringNumberOfTries;
        stringHistoryTime = "Zeit:";
        stringClear = "Löschen";
        stringClearYouSure = "Lokalen Ergebnishistorie löschen? <nobr>Diese Aktion kann nicht rückgängig gemacht werden</nobr>"
        stringYes = "Ja";
        stringCancel = "Abbrechen";
        break;
    case "uk": //Ukrainian
        stringFirstDrawn = "Перше число цього раунду витягнуто!";
        stringNumberOfTries = "Кількість спроб:";
        stringTimePassed = "з першої минуло:";
        stringInputLabel = "Введіть 4-значне число";
        stringReset = "Скиньте";
        stringTooSmall = "Введене число занадто мале";
        stringTooBig = "Введене число занадто велике";
        stringDrawn1 = "Випало число №";
        stringDrawn2 = "цього раунду!";
        stringYouGuessed = "Ви вгадали!";
        stringHistoryTitle = "Локальна історія результатів:";
        stringHistoryNumber = "число:";
        stringHistoryNumberOfTries = "кількість спроб:";
        stringHistoryTime = "час:";
        stringClear = "Видалити";
        stringClearYouSure = "Видалити локальну історію результатів? <nobr>Цю дію не можна скасувати</nobr>"
        stringYes = "Так";
        stringCancel = "Відміна";
        break;
    case "en":
        stringFirstDrawn = "The first number of this round has been drawn!";
        stringNumberOfTries = "Number of tries:";
        stringTimePassed = "since the first one passed:";
        stringInputLabel = "Enter a 4-digit number";
        stringReset = "Reset";
        stringTooSmall = "The entered number is too small";
        stringTooBig = "The entered number is too big";
        stringDrawn1 = "The #";
        stringDrawn2 = " number of this round has been drawn!";
        stringYouGuessed = "You guessed!";
        stringHistoryTitle = "Local results history:";
        stringHistoryNumber = "number:";
        stringHistoryNumberOfTries = "number of tries:";
        stringHistoryTime = "time:";
        stringClear = "Clear";
        stringClearYouSure = "Clear local results history? <nobr>This action cannot be undone</nobr>"
        stringYes = "Yes";
        stringCancel = "Cancel";
        break;
};

function showClearButton(){
    document.getElementById("clearButtons").innerHTML=`<button id="clearButton" onclick="clearAsk();">`+stringClear+`</button>`;
}

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

function updateResultsHistory(){
    l=resultsHistory.length;
    resultsHistory[l]=randomNumber;
    resultsHistory[l+1] = numberOfTries;
    resultsHistory[l+2] = document.getElementById("minutes").innerHTML;
    resultsHistory[l+3] = document.getElementById("seconds").innerHTML;
    const d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    document.cookie = "resultsHistory="+resultsHistory.toString()+";expires="+d.toUTCString()+";SameSite=Strict;path=/";
    writeHistory();
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
        updateResultsHistory();
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

    
function writeHistory(){
    document.getElementById("historyList").innerHTML="";
    let cookieVar= document.cookie;
    cookieVar=cookieVar.substr(15,cookieVar.length);
    if (cookieVar.length<1) return 0;
    document.getElementById("historyTitle").removeAttribute("hidden");
    resultsHistory=cookieVar.split(",");
    let string="";
    for (let i = 0;i<resultsHistory.length;i+=4){
        string += "<li>"+stringHistoryNumber+" "+resultsHistory[i]+", "+stringHistoryNumberOfTries+" "+resultsHistory[i+1]+", "+stringHistoryTime+" "+resultsHistory[i+2]+":"+resultsHistory[i+3]+"</li>";
    };
    document.getElementById("historyList").innerHTML=string;
    showClearButton();
}
function clearConfirmed(){
    document.cookie = "resultsHistory='';expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=Strict;path=/";
    writeHistory();
    document.getElementById("clearButtons").innerHTML="";
    document.getElementById("historyTitle").setAttribute("hidden","");
}

function clearAsk(){
    document.getElementById("clearButtons").innerHTML= 
        stringClearYouSure+`<br><button class="clearConfButton" onclick="clearConfirmed();"> `+stringYes+` </button><button class="clearConfButton" onclick="showClearButton();">`+stringCancel+`</button>`;
    
}
