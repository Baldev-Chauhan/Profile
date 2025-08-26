function clearInput(){
  document.getElementById("input-value").value = "";
  document.getElementById("value").value = "";
}

function convert(){
  const fromunit = document.getElementById("unit1").value;
  const tounit = document.getElementById("unit2").value;
  const num = parseFloat(document.getElementById("input-value").value);


  if(fromunit===tounit){
    alert("select two different units");
    return
  };

  if(fromunit ==="celsius" && tounit === "fahrenheit"){
    
    const multi = 9/5 * num;
    const f =  Math.round(multi + 32);
    const result = 
    ` Answer : °F = (9/5 × °C) + 32 
          °F = (9/5 × ${num}) + 32
          °F = (1.8 × ${num}) + 32 
          °F = (${Math.floor(multi)}) + 32 
          °F = ${f}`;
    
    document.getElementById("value").value = result;
    
  }
  else if(fromunit ==="fahrenheit" && tounit === "celsius"){
    const multi = num - 32;
    const c =  (multi) * 5/9;
    const result = 
    ` Answer : °C = (°F - 32) × 5/9
          °C = (${num} - 32) × 5/9
          °C = (${multi}) × 5/9
          °C = ${multi} × ${(5/9)}
          °C = ${Math.round(c)}`;
          
    document.getElementById("value").value = result;
    
  }
  else if(fromunit ==="celsius" && tounit === "Kelvin"){
    const K = num + 273.15;
    const result = 
    ` Answer : K = °C + 273.15
          K = ${num} + 273.15 
          K = ${K}`
              
    document.getElementById("value").value = result;
    
  }
  else if(fromunit ==="Kelvin" && tounit === "celsius"){
    const c = num - 273.15;
    const result = 
    ` Answer : °C = K + 273.15
          °C = ${num} + 273.15 
          °C = ${Math.round(c)}`
              
    document.getElementById("value").value = result;
    
  }
  else if(fromunit ==="Kelvin" && tounit === "fahrenheit"){  const multi = (num - 273.15) * 9/5;
     const f = multi + 32;
     const result = 
   ` Answer : °F = (K - 273.15) × 9/5 + 32
          °F = (${num} - 273.15) × 9/5 + 32 
          °F = (${Math.round(num - 273.15)}) × 1.8 + 32
          °F = ${multi} + 32
          °F = ${f}`
          
    document.getElementById("value").value = result;
    
  }
  else if(fromunit ==="fahrenheit" && tounit === "Kelvin"){  const multi = Math.round(num - 32) * 5/9;
     const K = multi + 273.15;
     const result = 
    ` Answer : K = (F − 32) × 5/9 + 273.15
            K = (${num} − 32) × 5/9 + 273.15
            K = (${Math.round(num - 32)}) × 5/9 + 273.15
            K = ${Math.round(multi)} + 273.15
            K = ${Math.round(K)}`
              
    document.getElementById("value").value = result;
    
  }

}