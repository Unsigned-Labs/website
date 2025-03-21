export function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScroll = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
      header.classList.remove('header-hidden');
      return;
    }

    if (currentScroll > lastScroll) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    lastScroll = currentScroll;
  });
}

export function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu')!;
  
  if (!menuToggle || !menuClose || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('flex');
    if (isOpen) {
      mobileMenu.classList.remove('flex');
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }

  menuToggle.addEventListener('click', toggleMenu);
  menuClose.addEventListener('click', toggleMenu);
}