const container = document.querySelector('.productCards');

if (container) {
  container.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cardAdd')) {
      const product = event.target.closest('.cartProduct');
      const { id } = product.dataset;
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'success') {
        alert('Успешно добавлено в корзину');
      }
    }
  });
}
