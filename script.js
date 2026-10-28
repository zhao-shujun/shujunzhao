'use strict';
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('menu-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuToggle.focus(); } });
window.matchMedia('(min-width: 621px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const papers = [...document.querySelectorAll('.paper')];
const filters = [...document.querySelectorAll('[data-filter]')];
function setFilter(filter) {
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
  papers.forEach(paper => { paper.hidden = filter !== 'all' && paper.dataset.category !== filter; });
  const count = papers.filter(paper => !paper.hidden).length;
  document.querySelector('#publication-status').textContent = `Showing ${count} ${filter === 'all' ? 'papers' : filter === 'preprint' ? 'preprints' : 'published and accepted papers'}.`;
}
filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
function revealPaper(hash) {
  if (!hash || !hash.startsWith('#paper-')) return;
  const target = document.getElementById(hash.slice(1));
  if (target?.classList.contains('paper') && target.hidden) setFilter('all');
}
document.querySelectorAll('a[href^="#paper-"]').forEach(link => link.addEventListener('click', () => revealPaper(link.hash)));
window.addEventListener('hashchange', () => revealPaper(location.hash));
revealPaper(location.hash);

const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id;
    navLinks.forEach(link => { if (link.hash === '#' + id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }, { rootMargin: '-12% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

const dialog = document.querySelector('#citation-dialog');
const code = document.querySelector('#citation-code');
const status = document.querySelector('#copy-status');
const copyButton = document.querySelector('#copy-citation');
const citationData = window.ACADEMIC_PUBLICATIONS || [];
let citationSource;
async function loadCitations() {
  return citationData;
}
// Generate the full download from the same data used by the citation dialogs.
const bibDownload = document.querySelector('.bib-download');
if (bibDownload && citationData.length && typeof URL.createObjectURL === 'function') {
  const bib = citationData.map(paper => paper.bibtex).join('\n\n') + '\n';
  bibDownload.href = URL.createObjectURL(new Blob([bib], {type:'text/plain;charset=utf-8'}));
  bibDownload.download = 'Shujun_Zhao_Publications.bib';
}
document.querySelectorAll('[data-cite]').forEach(button => button.addEventListener('click', async () => {
  citationSource = button;
  document.querySelector('#citation-paper').textContent = button.closest('.paper').querySelector('h3').textContent.replace(/↗/g, '').trim();
  status.textContent = '';
  code.textContent = 'Loading citation…';
  copyButton.disabled = true;
  dialog.showModal();
  try {
    const data = await loadCitations();
    const citation = data.find(paper => paper.id === button.dataset.cite);
    if (!citation) throw new Error('Citation not found.');
    code.textContent = citation.bibtex;
    copyButton.disabled = false;
  } catch {
    code.textContent = 'The citation could not be loaded. Please download the complete BibTeX file from the publication section.';
  }
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target !== dialog) return; const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); });
dialog.addEventListener('close', () => citationSource?.focus());
copyButton.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(code.textContent); status.textContent = 'Citation copied.'; }
  catch { const range = document.createRange(); range.selectNodeContents(code); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.'; }
});
