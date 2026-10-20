const MAKS_ENERGIA = 10;

function stanPoczatkowy() {
    return {
        pokoj = 1;
        energia = MAKS_ENERGIA;
        karta = false;
        bezpiecznik = false;
        zasilanie = false;
        koniec = false;
        wygrana = false;
    }
}

const pokoje = [
    {id: 1, nazwa: "Recepcja"}, 
    {id: 2, nazwa: "Magazyn"},
    {id: 3, nazwa: "Serwerownia"},
    {id: 4, nazwa: "Wyjscie"}
];
