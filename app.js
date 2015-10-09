Stamplay.init("registertemplate");
var user = new Stamplay.User().Model;
    document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var registrationData = { 
    			email: email, 
    			password: password 
    			};

    user.signup(registrationData).then(function(){
        alert("Success!");
    });
});
