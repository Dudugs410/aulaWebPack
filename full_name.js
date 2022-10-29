function concatenate( name, lastName){

    var fullName = name + " " + lastName
    return fullName;
}

function executeConcatenation(){
    
    var name = document.querySelector("#name").value
    var lastName = document.querySelector("#lastName").value
    
    const result = concatenate(name, lastName)

    document.querySelector("#fullName").innerHTML = result

}