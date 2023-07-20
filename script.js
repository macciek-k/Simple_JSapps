//setting language
switch (preferedLanguage()) { //remember, that this function is declared in /common_resources/languageDetecion.js file; don't forget to link that in html file!
    case "pl": //Polish
        stringAbout="Zbiór prostych aplikacji webowych napisanych w JavaScripcie autorstwa Macieja Komisara.";
        stringIPcalcDesc="Narzędzie do obliczania adresów i maski dla podsieci (IPv4)";
        stringCypherDesc="Narzędzie do zamiany tekstu do kodu będącego modyfikacją base64, z opcjonalnym szyfrowaniem kodu za pomocą szyfru w stylu GADERYPOLUKI. Narzędzie działa dwukierunkowo – koduje i dekoduje";
        stringNumberGuesserDesc="Mini-gra, w której użytkownik odgaduje liczbę wylosowaną przez komputer. Gra wykorzystuje pliki cookies (ciasteczka), zatem uruchamiając ją zgadzasz się na ich zapis na twoim urządzeniu.";
        stringLangDesc="Aplikacje te zawierają obsługę języka polskiego, niemieckiego, ukraińskiego i angielskiego. Język aplikacji wybierany jest na podstawie ustawień przeglądarki. W przypadku braku jakiegokolwiek z wymienionych, wybierany jest język angielski.";
        stringColorSchemeDesc="Także na podstawie ustawień systemu/&#8203przeglądarki, aplikacje te wyświetlają się w trybie jasnym, lub ciemnym.";
        stringLayoutDesc="Układ graficzny tych aplikacji zoptymalizowany jest pod kątem obsługi ich na smartfonie, lecz oczywiście też działają one bezproblemowo na komputerze.";
        break;
    case "de": //German
        stringAbout="Eine Sammlung einfacher Webanwendungen, geschrieben in JavaScript von Maciej Komisar.";
        stringIPcalcDesc="Werkzeug zur Berechnung von Adressen und Masken für Subnetze (IPv4)";
        stringCypherDesc="Ein Werkzeug zum Konvertieren von Text in Code, der eine base64-Modifikation ist, mit optionaler Verschlüsselung des Codes mit einer GADERYPOLUKI-ähnlichen Chiffre. Das Werkzeug arbeitet bidirektional - es kodiert und dekodiert";
        stringNumberGuesserDesc="Ein Minispiel, bei dem der Benutzer eine vom Computer gezogene Zahl errät. Das Spiel verwendet Cookies. Wenn Sie es also ausführen, stimmen Sie deren Speicherung auf Ihrem Gerät zu.";
        stringLangDesc="Diese Anwendungen bieten Unterstützung für Polnisch, Deutsch, Ukrainisch und Englisch. Die Sprache der Anwendung wird anhand der Browsereinstellungen ausgewählt. Wenn alle diese Einstellungen fehlen, wird Englisch ausgewählt.";
        stringColorSchemeDesc="Außerdem werden diese Anwendungen je nach System-/&#8203Browsereinstellungen im hellen oder dunklen Modus angezeigt.";
        stringLayoutDesc="Das Layout dieser Apps ist für die Verwendung auf einem Smartphone optimiert, aber natürlich funktionieren sie auch nahtlos auf einem Computer.";
        break;
    case "uk": //Ukrainian
        stringAbout="Колекція простих вебзастосунків, написаних на JavaScript від Мацея Комісара";
        stringIPcalcDesc="Інструмент розрахунку адрес і масок для підмереж (IPv4)";
        stringCypherDesc="Інструмент для перетворення тексту в код, який є модифікацією base64, з додатковим шифруванням коду за допомогою шифру в стилі GADERYPOLUKI. Інструмент працює двонаправлено - кодує і декодує";
        stringNumberGuesserDesc="Міні-гра, в якій користувач вгадує число, намальоване комп'ютером. Гра використовує файли cookie, тому, запускаючи її, ви погоджуєтеся на їх зберігання на вашому пристрої.";
        stringLangDesc="Ці застосунки включають підтримку польської, німецької, української та англійської мов. Мова застосунків обирається на основі налаштувань браузера. Якщо всі вони відсутні, вибирається англійська";
        stringColorSchemeDesc="Крім того, залежно від налаштувань системи/&#8203браузера, ці застосунки відображаються у світлому або темному режимі.";
        stringLayoutDesc="Лейаут цих застосунків оптимізовано для використання на смартфоні, але, звичайно, вони також чудово працюють і на комп'ютері.";
        break;
    case "en":
        stringAbout="A collection of simple web applications written in JavaScript by Maciej Komisar.";
        stringIPcalcDesc="Address and mask calculation tool for subnets (IPv4)";
        stringCypherDesc="A tool for converting text to code that is a base64 modification, with optional encryption of the code using a GADERYPOLUKI style cipher. The tool works bi-directionally - it encodes and decodes";
        stringNumberGuesserDesc="A mini-game in which the user guesses a number drawn by the computer. The game uses cookies, so by running it you agree to their storage on your device.";
        stringLangDesc="These applications include support for Polish, German, Ukrainian and English. The application language is selected based on the browser settings. If all of these are missing, English is selected.";
        stringColorSchemeDesc="Also, based on system/&#8203browser settings, these apps display in light, or dark mode.";
        stringLayoutDesc="The layout of these apps is optimized for use on a smartphone, but of course they also work seamlessly on a computer.";
        break;
};
