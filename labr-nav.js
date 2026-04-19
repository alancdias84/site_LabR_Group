// Nav dropdown with close delay — prevents accidental closing when cursor briefly leaves
(function(){
  const drops = document.querySelectorAll('.nav-links .has-drop');
  drops.forEach(d => {
    let closeTimer = null;
    const open  = () => { clearTimeout(closeTimer); d.classList.add('open'); };
    const close = () => { closeTimer = setTimeout(() => d.classList.remove('open'), 220); };
    d.addEventListener('mouseenter', open);
    d.addEventListener('mouseleave', close);
    d.addEventListener('focusin',  open);
    d.addEventListener('focusout', close);
  });
})();
