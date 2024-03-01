const btnChange = document.querySelector('.btnChange');

if (btnChange) {
  btnChange.addEventListener('click', async (event) => {
    const btnSend = document.querySelector('.btnSend');
    if (btnSend) {
      btnSend.addEventListener('submit', async (event) => {
        event.preventDefault();
        const { name, email } = event.target;
        const { id } = event.target.dataset;
      });
    }
  });
}
