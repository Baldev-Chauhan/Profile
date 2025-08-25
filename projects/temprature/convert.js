let celsius = "celsius";
let fahrenheit = "fahrenheit";
let kelvin = "kelvin";
let f = 78;
let c = 20;

if(celsius === "celsius" && fahrenheit === ""){
    f =  (9/5 * c) + 32;
    console.log(`${f}`);
}
else if(fahrenheit === "fahrenheit" && celsius === "celsius"){
   c =  (f - 32) * 5 / 9;
    console.log(Math.floor(c));
}
