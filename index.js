
let signUpUser=document.getElementById('signUpUser')
let signUpEmail=document.getElementById('signUpEmail')
let signUpPassword=document.getElementById('signUpPassword')
function signUp() {
  if(!signUpUser.value || !signUpEmail.value || !signUpPassword.value){
    alert('please enter all input field!')

    
  }
    localStorage.setItem('Name',signUpUser.value)
    localStorage.setItem('Email',signUpEmail.value)
    localStorage.setItem('Password',signUpPassword.value)
    window.location.href='index1.html' 
  }