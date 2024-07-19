// SignUp Form:-

let userName=document.getElementById('userName')
let userEmail=document.getElementById('userEmail')
let userPassword=document.getElementById('userPassword')
let signUpBtn=document.getElementById('signUpBtn')
signUpBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.setItem('Name',userName.value)
    localStorage.setItem('Email',userEmail.value)
    localStorage.setItem('Password',userPassword.value)
        if(userName.value && userEmail.value && userPassword.value){
            // alert('Your Account is SignUp Please Login')
            window.location.href = 'Login.html'
        }
        else{
            Swal.fire({
                title: "Please Enter Correct Input Field!",
                text: "Try Again!",
                icon: "error",
              });
        }
})