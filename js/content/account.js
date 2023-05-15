"use strict";


var account = {};

(function(){
    account.logon = function(){
    
    var container = document.createElement("div");
   
    var userEmail = document.createElement('span');
    userEmail.innerHTML = "Email: ";
    container.appendChild(userEmail);
    
    
    var userInput = document.createElement("input");
    container.appendChild(userInput);
    
    var userPassword = document.createElement('span');
    userPassword.innerHTML = "Password: ";
    container.appendChild(userPassword);
    
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    container.appendChild(passwordInput);
    
    
    var button = document.createElement("button");
    button.innerHTML = "login";
    container.appendChild(button);
    
    var msgDiv = document.createElement("div");
    container.appendChild(msgDiv);
    
    button.onclick = function () {

        // You have to encodeURI user input before putting into a URL for an AJAX call.
        // Otherwise, your URL may be refused (for security reasons) by the web server.
        var url = "webAPIs/login.jsp?email=" + escape(userInput.value) +
              "&password=" + escape(passwordInput.value);  
        console.log(url);

        console.log("onclick function will make AJAX call with url: " + url);
        ajax(url, processLogon, msgDiv);
        
        function processLogon(obj){
            console.log("Successfully called the find API. Next line shows the returned object.");
            console.log(obj);
            msgDiv.innerHTML = account.buildProfile(obj);
        };

       
    };
    return container;
};

    account.getProfile = function(){

        var profileDiv = document.createElement("div");

        var msgDiv = document.createElement("div");
        profileDiv.appendChild(msgDiv);

        var url = "webAPIs/getProfile.jsp";

        console.log("onclick function will make AJAX call with url: " + url);
        ajax(url, processProfile, msgDiv);
        
        function processProfile(obj){
            console.log("Successfully called the find API. Next line shows the returned object.");
            console.log(obj);
            msgDiv.innerHTML = account.buildProfile(obj);
        };
        
        return profileDiv;

    };

    account.logoff = function(){
        var profileDiv = document.createElement("div");

        var msgDiv = document.createElement("div");
        profileDiv.appendChild(msgDiv);

        var url = "webAPIs/logoff.jsp";

        console.log("onclick function will make AJAX call with url: " + url);

        ajax(url, processLogoff, msgDiv);

        function processLogoff(obj) {
                var msg = "";
                console.log("Successfully called the find API. Next line shows the returned object.");
                console.log(obj);
                if (obj.errorMsg.length > 0) {
                    msg += "<strong>" + obj.errorMsg + "</strong>";
                } else {
                    msg += "<strong>You are logged off " + "</strong>";
                }
                msgDiv.innerHTML = msg;
            }
            
        return profileDiv;
    };


    account.buildProfile = function(userObj){
        var msg = "";
        if (userObj.errorMsg.length > 0) {
            msg += "<strong>Error: " + userObj.errorMsg + "</strong>";
        } else {
            msg += "<strong>Welcome Web User " + userObj.webUserId + "</strong>";
            msg += "<br/> Birthday: " + userObj.birthday;
            msg += "<br/> MembershipFee: " + userObj.membershipFee;
            msg += "<br/> User Role: " + userObj.userRoleId + " " + userObj.userRoleType;
            msg += "<p> <img src ='" + userObj.image + "'></p>";
        }
        return msg;
    };
}());
