
let redInput = document.getElementById("red");
let greenInput =  document.getElementById("green");
let blueInput = document.getElementById("blue");
let hexValue = document.getElementById("hex-value");
let binaryRed = document.getElementById("binary-red");
let binaryGreen = document.getElementById("binary-green");
let binaryBlue = document.getElementById("binary-blue");
let transparencyInput = document.getElementById('transparency');
redInput.oninput = update;
greenInput.oninput = update;
blueInput.oninput = update;
transparencyInput.oninput = update;


function update()  {
    let red = redInput.value;
    let green = greenInput.value;
    let blue = blueInput.value;
    let transparency = transparencyInput.value;
    changeBackground(red, green, blue, transparency);
    let hexCode = createHexColorCode(red, green, blue);
    hexValue.innerText = 'HEX value: ' + hexCode;
    binaryRed.innerText = 'Red: ' + decimalToBinary(red);
    binaryGreen.innerText = 'Green: ' + decimalToBinary(green);
    binaryBlue.innerText = 'Blue: ' + decimalToBinary(blue)
}


function changeBackground (r, g, b, transparency) {
    let red = r;
    let green = g;
    let blue = b;
    let opacity = (transparency / 100);
    let color = 'rgba(' + red+ ', ' + green + ', ' +  blue + ','+ opacity + ')';
    document.body.style.backgroundColor = color;
}


function decimalToHexadecimal (decimal) {
    let hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    return hexDigits[Math.floor(decimal / 16)] + hexDigits[((decimal / 16) - Math.floor(decimal/ 16)) * 16];

}

function decimalToBinary (decimal){
    let binary = '';
    let number = decimal;
    while  (number > 0) {
        binary = (
            (((number / 2) - Math.floor(number /2)) * 2)
        ) + binary;
        number = Math.floor(number / 2)
    }
    while (binary.length < 8) {
        binary = '0' + binary;
    }
    return binary
}


function createHexColorCode (red, green, blue) {
    let redHex = decimalToHexadecimal(red);
    let greenHex = decimalToHexadecimal(green);
    let blueHex = decimalToHexadecimal(blue);
    return '#' + redHex + greenHex + blueHex;
}