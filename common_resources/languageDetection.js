function preferedLanguage(){
    let lang="";
    for (let i=0;i<navigator.languages.length;i++){
        let x = navigator.languages[i].toLowerCase().substr(0,2);
        switch (x) {
            case "pl": //Polish
            case "uk": //Ukrainian
            case "de": //German (note!: all variants!)
            case "en": //English (note!: all variants!)
                lang=x;
                break;
            default:
                break;
    };
    if (lang != "") break;
};
    if (lang == "") return "en"; else return lang; 
};