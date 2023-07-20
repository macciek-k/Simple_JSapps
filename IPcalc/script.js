//setting language
switch (preferedLanguage()) { //remember, that this function is declared in ../common_resources/languageDetecion.js file; don't forget to link that in html file!
    case "pl": //Polish
        stringIp = "IP:";
        stringMask = "Maska podsieci:";
        stringWildcard = "Odwrócona maska:";
        stringNetworkAddress = "Adres podsieci:";
        stringFirstDevice = "Adres pierwszego urządzenia:";
        stringLastDevice = "Adres ostatniego urządzenia:";
        stringBroadcast = "Adres rozgłoszeniowy:";
        break;
    case "de": //German
        stringIp = "IP:";
        stringMask = "Subnetzmaske:";
        stringWildcard = "Wildcard-Maske:";
        stringNetworkAddress = "Subnetzadresse:";
        stringFirstDevice = "Adresse des ersten Geräts:";
        stringLastDevice = "Adresse des letzten Geräts:";
        stringBroadcast = "Broadcast-Adresse:";
        break;
    case "uk": //Ukrainian
        stringIp = "IP-адреса:";
        stringMask = "Маска підмережі:";
        stringWildcard = "Інверсна маска:";
        stringNetworkAddress = "Адреса підмережі:";
        stringFirstDevice = "Адреса першого пристрою:";
        stringLastDevice = "Адреса останнього пристрою:";
        stringBroadcast = "Адреса трансляції:";
        break;
    case "en":
        stringIp = "IP:";
        stringMask = "Subnetwork mask:";
        stringWildcard = "Wildcard mask:";
        stringNetworkAddress = "Subnetwork address:";
        stringFirstDevice = "Address of the first device:";
        stringLastDevice = "Address of the last device:";
        stringBroadcast = "Broadcast address:";
        break;
};

function calcLongMask() {
    netmask.setCorrectness(1);
    netmask.octet = [0, 0, 0, 0];
    n = parseInt(document.getElementById("shortMask").value);
    let j = n;
    let i = 0;
    while (j >= 8) {
        netmask.octet[i] = 255;
        i++;
        j -= 8;
    };
    let rest = 128;
    while (j > 0) {
        netmask.octet[i] += rest;
        rest /= 2;
        j--;
    };
    document.getElementById("mask").value = netmask.octet.join('.');
    netmask.correct = true;
    calculate();
};

function calcShortMask(mask) {
    let n = 0;
    for (i = 0; i < 4; i++) {
        let a = mask[i];
        let c = 0;
        while (a) {
            c += a & 1;
            a >>= 1;
        };
        n += c;
    };
    document.getElementById("shortMask").value = n;
};

function calculate() {
    if (!(ipAddress.correct && netmask.correct)) return -1;
    let networkAddress = [];
    let wildcard = [];
    let broadcastAddress = [];
    let firstDevice = [];
    let lastDevice = [];
    for (i = 0; i < 4; i++) {
        wildcard[i] = 255 - netmask.octet[i];
        networkAddress[i] = ipAddress.octet[i] & netmask.octet[i];
        broadcastAddress[i] = networkAddress[i] + wildcard[i];
        firstDevice[i] = networkAddress[i];
        lastDevice[i] = broadcastAddress[i];
    };
    firstDevice[3]++;
    lastDevice[3]--;

    document.getElementById("networkAddress").value = networkAddress.join('.');
    document.getElementById("wildcard").value = wildcard.join('.');
    document.getElementById("firstDevice").value = firstDevice.join('.');
    document.getElementById("lastDevice").value = lastDevice.join('.');
    document.getElementById("broadcastAddress").value = broadcastAddress.join('.');
};

function clearOutputFields() {
    document.getElementById("networkAddress").value = "";
    document.getElementById("wildcard").value = "";
    document.getElementById("firstDevice").value = "";
    document.getElementById("lastDevice").value = "";
    document.getElementById("broadcastAddress").value = "";
};
class NumLabel {
    constructor(type) {
        this.type = type;
        this.octet = [];
        this.correct = false;
    };
    setCorrectness(cor) {
        let x = "";
        if ((!cor) && document.getElementById(this.type).value != "") x = "incorrect";
        document.getElementById(this.type).setAttribute("class", x);
    };
    additionalMaskCheck(){
        for (i = 0; i <= 3; i++) {
            switch(this.octet[i]){
                //correct subnetwork mask contains only those octets
                case 0:
                case 128:
                case 192:
                case 224:
                case 240:
                case 248:
                case 252:
                case 254:
                case 255:
                    break;
                default:
                    this.correct=0;
                    return 0;
            };
            //subnetwork mask is correct only, if octet(s) after one lower than 255 are/is equal 0
            if (i<3 && this.octet[i]<255 && this.octet[i+1]>0){
                this.correct=0;
                return 0;
            };
        };
        //this app assumes masks up to /30
        if (this.octet[3]==255 || this.octet[3]==254){
            this.correct=0;
            return 0;
        } else return 1;
    };
    OnChange() {
        let string = document.getElementById(this.type).value;
        string = string.replace(/,/g, ".");
        //such convertion is helpful, when user writes address/mask on numeric keyboard when their regional settings uses comma as decimal separator
        let arrOfStrings = [];
        arrOfStrings = string.split(".");
        this.correct = true;
        for (i = 0; i <= 3; i++) {
            this.octet[i] = parseInt(arrOfStrings[i]);
            if (isNaN(this.octet[i])) this.correct = false;
            if (this.octet[i] > 255 || this.octet[i] < 0) this.correct = false;
        };
        if (arrOfStrings.length != 4) this.correct = false;
        if (this.correct && this.type == "mask" && this.additionalMaskCheck()) calcShortMask(this.octet);
        if (this.correct) {
            this.setCorrectness(1);
            calculate();
        } else {
            this.setCorrectness(0);
            clearOutputFields();
        };
        document.getElementById(this.type).value = string;
    };
};
ipAddress = new NumLabel("IP");
netmask = new NumLabel("mask");