    
    //it checkes to see if the password and username matches for the regstered person's 
    function authenticate1(){
        var authorised;
        
        //get input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        //check to see if the password and username match
        if(username ==  "Bethany.Whitbey" && password == "951-1:"){
          authorised = true;
        }else{ // username or password do not match
          authorised = false;
          //alert user
          alert("Sorry, password is incorrect.");
        }
        //return result
        return authorised;
      } 
      //this document should be implemented to where beathany gets redirected to her page correctly.