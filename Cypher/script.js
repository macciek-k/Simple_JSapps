//setting language
const x = navigator.language.toLowerCase();
switch (x.replace("_", "-")) { //such convertions needed, because different systems/browsers return their lang code in different ways
    case "pl": //Polish
    case "pl-pl":
        stringOriginalMessage = "Wiadomość oryginalna:";
        stringKey = "Klucz (opcjonalny):";
        stringEncryptedMessage = "Wiadomość zaszyfrowana:";
        break;
    case "de": //German
    case "de-at":
    case "de-li":
    case "de-lu":
    case "de-de":
    case "de-ch":
        stringOriginalMessage = "Ursprüngliche Nachricht:";
        stringKey = "Schlüssel (optional):";
        stringEncryptedMessage = "Verschlüsselte Nachricht:";
        break;
    case "uk": //Ukrainian
    case "uk-ua":
        stringOriginalMessage = "Зашифроване повідомлення:";
        stringKey = "Ключ (необов'язково):";
        stringEncryptedMessage = "Оригінальне повідомлення:";
        break;
    default: //English
        stringOriginalMessage = "Original message:";
        stringKey = "Key (optional):";
        stringEncryptedMessage = "Encrypted message:";
        break;
};

function key(str, keyElement) {
    keyValue = keyElement.value;
    //i did that, because in this function value of "key" element is replaced in case of:
    //1. key is incorrect
    //2. key is correct, but isn't written in ab,cd,ef.. format, which is helpful for reading it
    if (keyValue != "") {
        keyValue = keyValue.split(",").join("");
        if (keyValue.length % 2 != 0) {
            keyElement.value = "";
            return str;
        };
        let keyArr = [];
        keyArr = keyValue.match(/.{1,2}/g);
        keyElement.value = keyArr;
        for (i = 0; i < keyArr.length; i++) {
            str = str.split(keyArr[i].charAt(0)).join("{}{");
            str = str.split(keyArr[i].charAt(1)).join("}{[");
            str = str.split("{}{").join(keyArr[i].charAt(1));
            str = str.split("}{[").join(keyArr[i].charAt(0));
        };
    };
    return str;
}

function encode() {
    let str = document.getElementById("original").value;
    if (str != "") {
        document.getElementById("key").setAttribute('disabled', '');
        //because this app does its actions in real time, it would be unsafe to letting the key to be modifiable all the time
        str = str.split("").reverse().join("");
        let encoder = new TextEncoder();
        let code = encoder.encode(str);
        //such convertion is needed for working with diacritics and other non-ASCII characters
        str = btoa(code);
        str = str.split("").reverse().join("");
        str = key(str, document.getElementById("key"));
        document.getElementById("encoded").value = str;
    } else {
        document.getElementById("key").removeAttribute('disabled');
        document.getElementById("encoded").value = "";
    };
}

function decode() {
    let str = document.getElementById("encoded").value;
    if (str != "") {
        document.getElementById("key").setAttribute('disabled', '');
        str = key(str, document.getElementById("key"));
        str = str.split("").reverse().join("");
        str = atob(str);
        let arrOfStrings = [];
        arrOfStrings = str.split(",");
        let arrOfInts = [];
        for (i = 0; i < arrOfStrings.length; i++) {
            arrOfInts[i] = parseInt(arrOfStrings[i]);
        };
        let decoder = new TextDecoder();
        let uint8Array = new Uint8Array(arrOfInts);
        str = decoder.decode(uint8Array);
        str = str.split("").reverse().join("");
        document.getElementById("original").value = str;
    } else {
        document.getElementById("original").value = "";
        document.getElementById("key").removeAttribute('disabled');
    };
}