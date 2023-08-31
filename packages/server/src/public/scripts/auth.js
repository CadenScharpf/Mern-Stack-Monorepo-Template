// Login user
document.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.matches('#login-btn')) {
    var emailInput = document.getElementById('email-input');
    var pwdInput = document.getElementById('pwd-input');
    var data = {
      email: emailInput.value,
      password: pwdInput.value,
    };
    Http
      .post('/api/auth/login', data)
      .then(() => {
        window.location.href = '/users';
      });
  }
}, false);

document.addEventListener('click', (event)  => {
  event.preventDefault();
  if (event.target.matches('#register-btn')) {
      var emailInput = document.getElementById('email-input-r');
      var pwdInput = document.getElementById('pwd-input-r');
      var phoneInput = document.getElementById('phone-input-r');
      var nameInput = document.getElementById('name-input-r');
      var data = {
      email: emailInput.value,
      password: pwdInput.value,
      name: nameInput.value,
      phone: phoneInput.value,
      };
      Http
      .post('/api/auth/register', data)
      .then(() => {
          window.location.href = '/users';
      });
  }
}, false)
