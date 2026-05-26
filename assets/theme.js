(function () {
  'use strict';

  /* --- Mobile drawer --- */
  const drawer = document.querySelector('[data-drawer]');
  const openers = document.querySelectorAll('[data-menu-open]');
  const closers = document.querySelectorAll('[data-drawer-close]');

  function openDrawer() {
    if (!drawer) return;
    drawer.hidden = false;
    document.body.classList.add('drawer-open');
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.hidden = true;
    document.body.classList.remove('drawer-open');
  }
  openers.forEach((el) => el.addEventListener('click', openDrawer));
  closers.forEach((el) => el.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && !drawer.hidden) closeDrawer();
  });

  /* --- AJAX add-to-cart for product cards --- */
  document.addEventListener('click', async function (e) {
    const btn = e.target.closest('[data-quick-add]');
    if (!btn) return;
    e.preventDefault();
    const id = btn.getAttribute('data-quick-add');
    if (!id) return;
    btn.classList.add('is-loading');
    btn.disabled = true;
    try {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ items: [{ id: id, quantity: 1 }] }),
      });
      if (!res.ok) throw new Error('Cart add failed');
      const cart = await fetch('/cart.js').then((r) => r.json());
      const count = document.querySelector('[data-cart-count]');
      if (count) {
        count.textContent = cart.item_count;
        count.setAttribute('data-cart-count', cart.item_count);
      }
      btn.classList.add('is-success');
      setTimeout(() => btn.classList.remove('is-success'), 1400);
    } catch (err) {
      console.error(err);
      btn.classList.add('is-error');
      setTimeout(() => btn.classList.remove('is-error'), 1400);
    } finally {
      btn.classList.remove('is-loading');
      btn.disabled = false;
    }
  });

  /* --- Lazy image fade-in --- */
  if ('loading' in HTMLImageElement.prototype === false) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            io.unobserve(img);
          }
        });
      });
      lazyImages.forEach((img) => io.observe(img));
    }
  }
})();
