const layar = document.getElementById('layar');
let angka1 = "";
let angka2 = "";
let operator = "";

function hitung(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "*":
        return angka1 * angka2;
        case "/":
            return angka1 / angka2;
        case "%":
            return angka1 % angka2;
        default:
            return "";
        }
}

function tampilkanHasil(hasil) {
    layar.value = hasil;
}

const tombolAngka = document.querySelectorAll('.tombol button');

tombolAngka.forEach(button => {
    button.addEventListener('click', () => {
    const angka = button.textContent;
    if (angka2 === "") {
        angka1 += angka;
    } else {
        angka2 += angka;
    }
    layar.value = angka1;
    });
});

const tombolOperator = document.querySelectorAll('.tombolOperator button');

tombolOperator.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;  
    });
});

const tombolSamaDengan = document.getElementById('tombolSamaDengan');

tombolSamaDengan.addEventListener('click', () => {
    if (angka2) {
        const hasil = hitung(parseFloat(angka1), parseFloat(angka2), operator);
        tampilkanHasil(hasil);
        angka1 = "";
        angka2 = "";
        operator = "";
    }
});
