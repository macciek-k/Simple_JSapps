//setting language
const x = navigator.language.toLowerCase();
switch (x.replace("_", "-")) { //such convertions needed, because different systems/browsers return their lang code in different ways
    case "pl": //Polish
    case "pl-pl":
        stringAbout="Zbiór prostych aplikacji webowych napisanych w JavaScripcie autorstwa Macieja Komisara.";
        stringIPcalcDesc="Narzędzie do obliczania adresów i maski dla podsieci (IPv4)";
        stringCypherDesc="Narzędzie do zamiany tekstu do kodu będącego modyfikacją base64, z opcjonalnym szyfrowaniem kodu za pomocą szyfru w stylu GADERYPOLUKI";
        stringLangDesc="Aplikacje te zawierają obsługę języka polskiego, niemieckiego, ukraińskiego i angielskiego. Pierwsze trzy ustawiane są po wykryciu ich w ustawieniach przeglądarki użytkownika, ostatni – wybierany jest jako domyślny w przypadku braku wyżej wymienionych.";
        stringColorSchemeDesc="Także na podstawie ustawień systemu/&#8203przeglądarki, aplikacje te wyświetlają się w trybie jasnym, lub ciemnym.";
        stringLayoutDesc="Układ graficzny tych aplikacji zoptymalizowany jest pod kątem obsługi ich na smartfonie, lecz oczywiście też działają one bezproblemowo na komputerze.";
        break;
    case "de": //German
    case "de-at":
    case "de-li":
    case "de-lu":
    case "de-de":
    case "de-ch":
        stringAbout="Eine Sammlung einfacher Webanwendungen, geschrieben in JavaScript von Maciej Komisar.";
        stringIPcalcDesc="Werkzeug zur Berechnung von Adressen und Masken für Subnetze (IPv4)";
        stringCypherDesc="Ein Werkzeug zum Konvertieren von Text in Code, der eine base64-Modifikation ist, mit optionaler Verschlüsselung des Codes mit einer GADERYPOLUKI-ähnlichen Chiffre";
        stringLangDesc="Diese Anwendungen bieten Unterstützung für Polnisch, Deutsch, Ukrainisch und Englisch. Die ersten drei werden eingestellt, wenn sie in den Browsereinstellungen des Nutzers erkannt werden, während die letzte als Standard ausgewählt wird, wenn die oben genannten nicht vorhanden sind.";
        stringColorSchemeDesc="Außerdem werden diese Anwendungen je nach System-/&#8203Browsereinstellungen im hellen oder dunklen Modus angezeigt.";
        stringLayoutDesc="Das Layout dieser Apps ist für die Verwendung auf einem Smartphone optimiert, aber natürlich funktionieren sie auch nahtlos auf einem Computer.";
        break;
    case "uk": //Ukrainian
    case "uk-ua":
        stringAbout="Колекція простих вебзастосунків, написаних на JavaScript від Мацея Комісара";
        stringIPcalcDesc="Інструмент розрахунку адрес і масок для підмереж (IPv4)";
        stringCypherDesc="Інструмент для перетворення тексту в код, який є модифікацією base64, з додатковим шифруванням коду за допомогою шифру в стилі GADERYPOLUKI";
        stringLangDesc="Ці застосунки включають підтримку польської, німецької, української та англійської мов. Перші три встановлюються при виявленні в налаштуваннях браузера користувача, тоді як остання вибирається за замовчуванням за відсутності вищезгаданих.";
        stringColorSchemeDesc="Крім того, залежно від налаштувань системи/&#8203браузера, ці застосунки відображаються у світлому або темному режимі.";
        stringLayoutDesc="Лейаут цих застосунків оптимізовано для використання на смартфоні, але, звичайно, вони також чудово працюють і на комп'ютері.";
        break;
    default: //English
        stringAbout="A collection of simple web applications written in JavaScript by Maciej Komisar.";
        stringIPcalcDesc="Address and mask calculation tool for subnets (IPv4)";
        stringCypherDesc="A tool for converting text to code that is a base64 modification, with optional encryption of the code using a GADERYPOLUKI style cipher";
        stringLangDesc="These applications include support for Polish, German, Ukrainian and English. The first three are set when detected in the user's browser settings, while the last one is selected as the default in the absence of the aforementioned.";
        stringColorSchemeDesc="Also, based on system/&#8203browser settings, these apps display in light, or dark mode.";
        stringLayoutDesc="The layout of these apps is optimized for use on a smartphone, but of course they also work seamlessly on a computer.";
        break;
};
