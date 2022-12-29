function convert(){
    let celcius=document.getElementById('data').value;
    const factor= celcius*(1.8)+32;
    var fer=factor;
    document.getElementById('result').innerText= fer+"_" +"fahrenheit";
}