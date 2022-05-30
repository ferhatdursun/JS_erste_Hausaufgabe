const sayi = +prompt("Bitte Geben Sie ihren Zahl ein !");



if (sayi <= 25) {
    sonuc = "FF"
} else if (sayi <= 45) {
    sonuc = "DD"
} else if (sayi <= 65) {
    sonuc = "CC"
} else if (sayi <= 75) {
    sonuc = "BB"
} else if (sayi <= 90) {
    sonuc = "BA"
} else if (91 <= sayi) {
    sonuc = "AA"
}
console.log("eingegebene Zahl:", `${sayi}`, `/`,  "Als Buchstabe:", sonuc)