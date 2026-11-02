function initNav() {
  const header      = document.getElementById('siteHeader');
  const menuBtn     = document.getElementById('menuToggle');
  const drawer      = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const backdrop    = document.getElementById('drawerBackdrop');

  const searchBtn   = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  // Sticky header shadow
  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Drawer open/close
  const openDrawer = () => {
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.classList.add('is-locked');
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    drawerClose?.focus();
  };
  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  };
  menuBtn?.addEventListener('click', openDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  // Search open/close
  const openSearch = () => {
    searchPanel.classList.add('is-open');
    searchBtn?.setAttribute('aria-expanded', 'true');
    searchPanel.setAttribute('aria-hidden', 'false');
    searchInput?.focus();
  };
  const closeSearch = () => {
    searchPanel.classList.remove('is-open');
    searchBtn?.setAttribute('aria-expanded', 'false');
    searchPanel.setAttribute('aria-hidden', 'true');
  };
  searchBtn?.addEventListener('click', () => {
    searchPanel.classList.contains('is-open') ? closeSearch() : openSearch();
  });
  searchClose?.addEventListener('click', closeSearch);

  // Escape closes everything
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeDrawer(); closeSearch(); }
  });
}