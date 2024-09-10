//maddy's sighn in form
function authenticate3(){
    var authorised;
    
    //get input values
    var username = document.getElementById("username3").value;
    var password = document.getElementById("password3").value;
    
    //check to see if the password and username match
    if(username ==  "Madisen.Whitbey" && password == "9512#1"){
      authorised = true;
    }else{ // username or password do not match
      authorised = false;
      //alert user
      alert("Sorry, password is incorrect.");
    }
    //return result
    return authorised;
  } 