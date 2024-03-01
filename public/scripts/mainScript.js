const formDate = document.querySelector('.form-date');

if (formDate) {
  formDate.addEventListener('submit', async (e) => {
    e.preventDefault();

    const res = await fetch('/api/getOne');

    const data = await res.json();

    document.querySelector('.randomProduct').innerHTML = data.html;
    document.querySelector('.randomProduct').style.display = 'block';
    // console.log(html);
  });
}