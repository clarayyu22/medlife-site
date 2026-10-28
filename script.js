document.documentElement.classList.add('js');
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
menu.hidden = false;
function closeMenu(){ nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }
menu.addEventListener('click',()=>{ const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); });
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && nav.classList.contains('open')){closeMenu();menu.focus();}});

// Scroll-snap gallery with optional controls; no autoplay.
const eventTrack = document.querySelector('#event-track');
if (eventTrack) {
  const cards = [...eventTrack.querySelectorAll('.event-card')];
  const controls = document.querySelector('.gallery-controls');
  const status = controls.querySelector('.gallery-status');
  let current = 0;
  const position = card => card.getBoundingClientRect().left - eventTrack.getBoundingClientRect().left + eventTrack.scrollLeft;
  function updateGallery() {
    current = cards.reduce((nearest, card, index) =>
      Math.abs(position(card) - eventTrack.scrollLeft) < Math.abs(position(cards[nearest]) - eventTrack.scrollLeft) ? index : nearest, 0);
    // The last card can be fully visible before it reaches the left edge.
    if (eventTrack.scrollLeft >= eventTrack.scrollWidth - eventTrack.clientWidth - 2) current = cards.length - 1;
    const value = `${current + 1} / ${cards.length}`;
    if (status.textContent !== value) status.textContent = value;
  }
  function moveGallery(direction) {
    const index = (current + direction + cards.length) % cards.length;
    eventTrack.scrollTo({left: position(cards[index])});
  }
  controls.hidden = false;
  controls.querySelector('.gallery-prev').addEventListener('click', () => moveGallery(-1));
  controls.querySelector('.gallery-next').addEventListener('click', () => moveGallery(1));
  eventTrack.addEventListener('scroll', updateGallery, {passive: true});
  eventTrack.addEventListener('keydown', event => {
    if (event.target !== eventTrack || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    moveGallery(event.key === 'ArrowRight' ? 1 : -1);
  });
  window.addEventListener('resize', updateGallery);
  updateGallery();
}
