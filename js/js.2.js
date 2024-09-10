//this one makes shure i get sighned in as me 
     
    //Following function gets values of the username and password fields and checks to see if they match a hard coded username and password 
    function authenticate2(){
        var authorised;
        
        //get input values
        var username = document.getElementById("username1").value;
        var password = document.getElementById("password1").value;
        
        //check to see if the password and username match
        if(username ==  "Ronnie.Greb" && password == "9512#"){
          authorised = true;
        }else{ // username or password do not match
          authorised = false;
          //alert user
          alert("Sorry, password is incorrect.");
        }
        //return result
        return authorised;
      } 