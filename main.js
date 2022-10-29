
function sum( num_01, num_02){

    var sum = parseInt(num_01) + parseInt(num_02)
    return sum;
}


function executeSum(){
    
    var num_01 = document.querySelector("#num_01").value
    var num_02 = document.querySelector("#num_02").value
    
    if((isNaN(num_01)) || (isNaN(num_02)))
    {
        alert("Type a valid number")
        return
    }
    
    const resultado = sum(num_01, num_02)

    document.querySelector("#resultSum").innerHTML = resultado

}