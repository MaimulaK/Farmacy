const regForm = document.querySelector('.sing-up');
const authForm = document.querySelector('.sing-in');
const { body } = document;

if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(22222222);
    const { name, email, password, cpassword } = e.target;
    if (password.value === cpassword.value) {
      const user = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      const res = await fetch('/api/auth/registration', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (data.message === 'success') {
        const div = document.createElement('div');
        div.innerHTML =
          'Регистрация прошла успешно!Скоро вас переведет на мейн страницу';
        body.appendChild(div);
        setTimeout(() => {
          window.location.assign('/');
        }, 3000);
        return;
      }
    }
    alert('ne sovpadaut');
  });
}

if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = {
      email: email.value,
      password: password.value,
    };
    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    // console.log(data);
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}
