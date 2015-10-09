Stamplay.init("registertemplate");

    document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();

   var email = document.getElementById("email").value;

   var Obj = {address:email};

    var emailInstance = new Stamplay.Cobject('obj').Model;
   emailInstance.set('address', email);
   emailInstance.save().then(function(){
    alert('Check your email!');
   });
});




    //USER SIGN-UP

    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    // var registrationData = { 
    //          email: email, 
    //          password: password 
    //          };

    // user.signup(registrationData).then(function(){
    //     alert("Success!");