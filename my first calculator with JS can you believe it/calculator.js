function sumNumbers(num1, num2) {
    var result = num1 + num2;
    return result;
}

function minusNumbers(num1, num2) {
    var result = num1 - num2;
    return result;
}

function multipleNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

function divisionNumbers(num1, num2) {
    var result = num1 / num2;
    return result;
}

function underRoot(num1, num2) {
    var result = (num1**0.5);
    var resultTwo = (num2**0.5);
    return result;
    return resultTwo;
}

function square(num1, num2) {
    var result = (num1**2);
    var resultTwo = (num2**2);
    return result;
    return resultTwo;
}

function sinCalc(num1, num2) {
    var result = Math.sin(num1);
    var resultTwo = Math.sin(num2);
    return result;
    return resultTwo;
}

function cosCalc(num1, num2) {
    var result = Math.cos(num1);
    var resultTwo = Math.cos(num2);
    return result;
    return resultTwo;
}

var x = document.getElementById("inp");
var y = document.getElementById("inptoo");
var t = document.getElementById("result");
var too = document.getElementById("secondResult")

function calculate() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var snu = sumNumbers(z, w);
    t.innerHTML = snu;
    too.innerHTML = "";
}

function difference() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var snu = minusNumbers(z, w);
    t.innerHTML = snu;
    too.innerHTML = "";
}

function product() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var snu = multipleNumbers(z, w);
    t.innerHTML = snu;
    too.innerHTML = "";
}

function quotient() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var snu = divisionNumbers(z, w);
    t.innerHTML = snu;
    too.innerHTML = "";
}

function rootfunc() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var snu = underRoot(z);
    var sntoo = underRoot(w)
    t.innerHTML = snu;
    too.innerHTML = sntoo;
}

function squarefunc() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var snu = square(z);
    var sntoo = square(w);
    t.innerHTML = snu;
    too.innerHTML = sntoo;
}

function sinfunc() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var sin1 = Math.PI * z / 180;
    var sin2 = Math.PI * w / 180;
    t.innerHTML = Math.sin(sin1);
    too.innerHTML = Math.sin(sin2);
}

function cosfunc() { 
    var z = parseInt(x.value);
    var w = parseInt(y.value);
    console.log({z, w});
    var cos1 = Math.PI * z / 180;
    var cos2 = Math.PI * w / 180;
    t.innerHTML = Math.cos(cos1);
    too.innerHTML = Math.cos(cos2);
}

// t.innerHTML = ("F = " + snu);
// too.innerHTML = ("S = " + sntoo);