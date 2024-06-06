var user = [];

user = JSON.parse(localStorage.getItem('user'));

var signInEmail = document.getElementById('signEmail');
var signInPassword = document.getElementById('signPassword'); 


document.getElementById('login').addEventListener('click', function(){
    if(signInEmail.value == '' || signInPassword == ''){
        document.getElementById('message').innerHTML = `<p class='text-center text-danger'>All Fields are required</p>`;
    }else{
        checkUser();
    }
} );


function checkUser(){
    for(var i=0;i<user.length;i++){
        if(signInEmail.value == user[i].email && signInPassword.value == user[i].password){
            var userName = user[i].name;
            localStorage.setItem('userName' , userName);
            location.href = '../../home/index.html';
            break; 
        }else {
            document.getElementById('message').innerHTML = `<p class='text-center text-danger'>Email or Password are Wrong</p>`;
        }
    }       
}