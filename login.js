document.getElementById('login-btn').addEventListener('click', function(){
 const loginInput= document.getElementById('login-input-value');
 const loginInputValue= loginInput.value;
 const loginPassword =document.getElementById('login-password');
 const loginPasswordValue= loginPassword.value;
 loginInput.value = '';
 
 if(loginInputValue=== 'asad@zaman.com'&& loginPasswordValue==='daddy'){
  window.location.href= 'transition.html';
 }
 else{
  alert('invalid user');
 }
})