let cel = document.getElementById('celsius');
let fah = document.getElementById('fahrenheit');


cel.oninput = () => {
    let out = (parseFloat(cel.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(out.toFixed(2));
};

fah.oninput = () => {
    let out = ((parseFloat(fah.value) - 32) * 5) / 9;
    celsius.value = parseFloat(out.toFixed(2));
};


