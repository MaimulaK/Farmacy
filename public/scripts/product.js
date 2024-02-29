const formSort = document.querySelector('.formSort');

if (formSort) {
  formSort.addEventListener('click', async (event) => {
    if (event.target.classList.contains('sortUp')) {
      const res = await fetch('/api/sortUp');
      const data = await res.json();
      //   console.log(data);
      if ((data.message = 'success')) {
        document.querySelector('.productCards').remove();
        document
          .querySelector('.container')
          .insertAdjacentHTML('beforeend', data.html);
      }
    }
    if (event.target.classList.contains('sortDown')) {
      const res = await fetch('/api/sortDown');
      const data = await res.json();
      //   console.log(data);
      if ((data.message = 'success')) {
        document.querySelector('.container').innerHTML = data.html;
        // document.querySelector('.productCards').remove();
        // document.querySelector('.container')
        //   .insertAdjacentHTML('beforeend', data.html);
      }
    }
  });
}
