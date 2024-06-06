var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPassword = document.getElementById('signPassword');

var user = [];

var nameRegex = /^[a-zA-Z\-]+$/;
var emailRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function isNameValid(){
    if(nameRegex.test(signUpName.value)){
        return true
    }
    return false;
} 

function isEmailValid(){
    if(emailRegex.test(signUpEmail.value)){
        return true
    }
    return false;
} 

function isPasswordValid(){
    if(passwordRegex.test(signUpPassword.value)){
        return true
    }
    return false;
} 

if(localStorage.getItem('user') != null){
    user = JSON.parse(localStorage.getItem('user'));
}else{
    user = [];
}

function add(){
    if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == ''){
        document.getElementById('message').innerHTML = `<p class='text-center text-danger'>All Fields are required</p>`;
    }else if(isNameValid() && isEmailValid() && isPasswordValid()) {
        var userObj = {
            name : signUpName.value,
            email : signUpEmail.value,
            password : signUpPassword.value
        }
        user.push(userObj);
        localStorage.setItem('user',JSON.stringify(user));
        location.href = '../../login/index.html'
    }else{
        document.getElementById('message').innerHTML = `<p class='text-center text-danger'>Name or Email or Password in Wrong format</p>`;
    }
}