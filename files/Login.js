// Login Form Js:-

let loginEmail=document.getElementById('login-Email')
let loginPassword=document.getElementById('login-Password')
let loginBtn=document.getElementById('loginBtn')
let email=localStorage.getItem('Email')
let pass=localStorage.getItem('Password')
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(loginEmail.value === email && loginPassword.value === pass){
        alert('Your Account is Login!')
            window.location.href='Store.html'
    }
    else{
        alert('Your Email Address Or Password Is Incorrect!')
        
    }
})
    