const container = document.querySelector('.productCards');

if (container) {
  container.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cardAdd')) {
      const product = event.target.closest('.productItem');
      const { id } = product.dataset;
      const responce = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(id),
      });
    }
  });
}
