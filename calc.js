//const { Module } = require("webpack");

function Sum(num_01, num_02){
    
    var num_01 = document.querySelector("#num_01").value
    var num_02 = document.querySelector("#num_02").value
    
    if((isNaN(num_01)) || (isNaN(num_02)))
    {
        alert("Type a valid number")
        return
    }
    
    const resultado = Number(num_01) + Number(num_02)

    document.querySelector("#resultOp").innerHTML = resultado

}

function Sub(num_01, num_02){
    
    var num_01 = document.querySelector("#num_01").value
    var num_02 = document.querySelector("#num_02").value
    
    if((isNaN(num_01)) || (isNaN(num_02)))
    {
        alert("Type a valid number")
        return
    }
    
    const resultado = Number(num_01) - Number(num_02)

    document.querySelector("#resultOp").innerHTML = resultado

}

function Mult(){
    
    var num_01 = document.querySelector("#num_01").value
    var num_02 = document.querySelector("#num_02").value
    
    if((isNaN(num_01)) || (isNaN(num_02)))
    {
        alert("Type a valid number")
        return
    }
    
    const resultado = Number(num_01) * Number(num_02)

    document.querySelector("#resultOp").innerHTML = resultado

}

function Divide(){
    
    var num_01 = document.querySelector("#num_01").value
    var num_02 = document.querySelector("#num_02").value
    
    if((isNaN(num_01)) || (isNaN(num_02)))
    {
        alert("Type a valid number")
        return
    }

    else if((num_01 == 0) || (num_02 == 0))
    {
        alert("Cannot divide by zero")
        document.querySelector("#resultOp").innerHTML = 0
        return 0
    }
    
    const resultado = Number(num_01) / Number(num_02)

    document.querySelector("#resultOp").innerHTML = resultado

}

module.exports.executeSum = executeSum;
module.exports.sum = sum;

