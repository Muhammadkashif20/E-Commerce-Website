let loginEmail=document.getElementById('loginEmail')
let loginPassword=document.getElementById('loginPassword')
function login() {
  let storeEmail=localStorage.getItem('Email')
  let storePassword=localStorage.getItem('Password')
  if(loginEmail.value==storeEmail && loginPassword.value==storePassword){
          window.location.href='index2.html'
        }
        else{
          alert('Your Email Address Or Password is incorrect')
        }
      }