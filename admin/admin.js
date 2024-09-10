//Following function gets values of the username and password fields and checks to see if they match a hard coded username and password 
function authenticate(){
    var authorised;
    
    //get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    //check to see if the password and username match
    if(username ==  "!#P6B?m?cJo5n9qSeMFdLB59R" && password == "7DEHT*7rP4WGq%S!k489tsu"){
      authorised = true;
    }else{ // username or password do not match
      authorised = false;
      //alert user
      alert("Sorry, password is incorrect.");
    }
    //return result
    return authorised;
  } 
//endofdoc
