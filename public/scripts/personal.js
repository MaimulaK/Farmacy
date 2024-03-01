

document.addEventListener('DOMContentLoaded', () => {
  const btnChange = document.querySelector('.btnChange');
  const { body } = document;

  if (btnChange) {
    btnChange.addEventListener('click', (event) => {
      const form = document.createElement('form');
      const inputName = document.createElement('input');
      const inputEmail = document.createElement('input');
      const button = document.createElement('button');

      form.className = 'form-for-Add';
      inputName.type = 'text';
      inputName.name = 'name';
      inputName.placeholder = 'Введите ваше имя';

      inputEmail.type = 'email';
      inputEmail.name = 'email';
      inputEmail.placeholder = 'Введите ваш email';

      button.type = 'submit';
      button.textContent = 'Отправить';
      body.appendChild(form);
      form.appendChild(inputName);
      form.appendChild(inputEmail);
      form.appendChild(button);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const { name, email } = e.target;
        console.log(name, email);
        const data = {
          name: name.value,
          email: email.value,
        };
        const responce = await fetch('/api/personal', {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(data),
        });
        const res = await responce.json();
        console.log(res);
        if (res.message === 'success') {
          console.log('vse norm');
          window.location.assign('/personal');
        }
      });
    });
  }
});
