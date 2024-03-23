
// Clear Original Statement
document.getElementById("ClearInput").onclick = function () {
    document.getElementById("Input").innerHTML = ""
}
//  Clear Output
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}


// concatenate
document.getElementById("concatenate").onclick = function () {
    let first = prompt("Enter Ist String")
    let second = prompt("Enter 2nd String")
    let concatenation = first +  second
    document.getElementById("Input").innerHTML = "let first = "+ first +" </br> let second = "+ second +" </br>  concatenation = " + first +  " + " + second;
    document.getElementById("Output").innerHTML = concatenation;
}

// name
document.getElementById("name").onclick = function () {
    let Name =prompt("Enter Your Good Name")
    document.getElementById("Input").innerHTML =  "let Name = "+ Name ;
    document.getElementById("Output").innerHTML = Name;
}
// compare
document.getElementById("compare").onclick = function () {
    let num1 =+prompt("Enter Ist Number")
    let num2 =+prompt("Enter 2nd Number")
    let msg=""
   if (num1==num2){
       msg="Numbers are equal"
    }
    else if (num1<num2)
    {
        msg="Ist Number is less than 2nd Number"
    }
    else if(num1>num2)
    {
       msg="Ist Number is greater than 2nd Number"
    }
    else 
    {
       msg="Numbers are not equal"
    }
    alert(msg)
    document.getElementById("Input").innerHTML = "let num1 = "+ num1 +" </br> let num2 = "+ num2 ;
    document.getElementById("Output").innerHTML = msg;
}
// ifStructure
document.getElementById("ifStructure").onclick = function () {
    let age =prompt("Enter Your Age")
    let msg=""
   if (age<=12){
       msg="You are a child"
    }
    else if (age<=19)
    {
        msg="You are teen boy"
    }
    else if(age>=20)
    {
       msg="You are a young man"
    }
    else 
    {
       msg="You are a uncle"
    }
    alert(msg)
    document.getElementById("Input").innerHTML = "let age = "+ age ;
    document.getElementById("Output").innerHTML = msg;
}

// condition
document.getElementById("condition").onclick = function () {
    let marks =+prompt("Enter Your Marks Out of 100")
    let msg=""
   if (marks>40){
       let subject = prompt("Please enter your main subject")
       msg="Congratulations! Your admission is possible in this college"
    }
    else  
    {
        msg="Your admission is not possible in this college" 
    }
   
    alert(msg)
    document.getElementById("Input").innerHTML = "let Marks = "+ marks  ;
    document.getElementById("Output").innerHTML = msg;
}

// nestedIf
document.getElementById("nestedIf").onclick = function(){
    let username = prompt("Enter Your Username")
    if(username==="uzair")
    {
        let password=prompt("Enter Your Password")
        if(password==="uzair2003"){
            alert("You are loggedin")
        }
    else{
        alert("Your password is incorrect")
        document.getElementById("Output").innerHTML = "You are successfully logged in";
    }
}
    else { 
        alert("Your name is incorrect")
        document.getElementById("Output").innerHTML = "Correct Username is uzair <br> and password is uzair2003";
    }


}


// login
document.getElementById("login").onclick = function(){
    let username = prompt("Enter Your Username")
    if(username==="uzair")
    {
        let password=prompt("Enter Your Password")
        if(password==="uzair2003"){
            alert("You are loggedin")
            document.getElementById("Output").innerHTML = "You are successfully logged in";
        }
    else{
        alert("Your password is incorrect")
    }
}
    else { 
        alert("Your name is incorrect")
        document.getElementById("Output").innerHTML = "Correct Username is uzair <br> and password is uzair2003";
    }


}
