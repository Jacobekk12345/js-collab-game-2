const MAKS_ENERGIA = 10;

function stanPoczatkowy() {
    return {
        pokoj: 1,
        energia: MAKS_ENERGIA,
        karta: false,
        bezpiecznik: false,
        zasilanie: false,
        koniec: false,
        wygrana: false
    };
}

const pokoje = [
    {id: 1, nazwa: "Recepcja"},
    {id: 2, nazwa: "Magazyn"},
    {id: 3, nazwa: "Serwerownia"},
    {id: 4, nazwa: "Wyjscie"}
];

function przejscie(stanPrzed, komenda) {
    if (komenda === "prawo" && stanPrzed.pokoj < 4)
        return {...stanPrzed, energia: stanPrzed.energia - 1, pokoj: stanPrzed.pokoj + 1};

    if (komenda === "lewo" && stanPrzed.pokoj > 1)
        return {...stanPrzed, energia: stanPrzed.energia - 1, pokoj: stanPrzed.pokoj - 1};

    if (komenda === "prawo" || komenda === "lewo")
        return {...stanPrzed, komunikat: "nie mozesz wejsc w sciane"};

    return {...stanPrzed, komunikat: "nieznany kierunek"};
}