// Simple form handler (no backend)
const form = document.getElementById('leadForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').trim();
  const mobile = (data.get('mobile') || '').trim();

  if (!/^[0-9]{10}$/.test(mobile)) {
    msg.textContent = 'Please enter a valid 10-digit mobile.';
    msg.style.color = '#c026d3';
    return;
  }
  msg.textContent = 'Thanks, ' + name + '! Our team will call you shortly.';
  msg.style.color = '#10b981';
  form.reset();
});

// FAQ toggles
document.querySelectorAll('.faq').forEach(f => {
  const btn = f.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const open = f.getAttribute('data-open') === 'true';
    f.setAttribute('data-open', String(!open));
  });
});
