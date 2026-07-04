document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[data-formspree]').forEach(form => {
    const statusEl = form.querySelector('.form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const action = form.getAttribute('action') || '';
      if(action.includes('YOUR_')){
        if(statusEl){
          statusEl.textContent = 'This form needs a real Formspree endpoint — replace the placeholder in the action attribute with your form ID from formspree.io.';
          statusEl.className = 'form-status error';
        }
        return;
      }

      if(submitBtn){ submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      if(statusEl){ statusEl.textContent = ''; statusEl.className = 'form-status'; }

      try{
        const res = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if(res.ok){
          form.reset();
          if(statusEl){
            statusEl.textContent = 'Thank you — your message has been sent.';
            statusEl.classList.add('success');
          }
        } else {
          const data = await res.json().catch(() => null);
          const msg = data && data.errors
            ? data.errors.map(err => err.message).join(', ')
            : 'Something went wrong. Please try again.';
          if(statusEl){ statusEl.textContent = msg; statusEl.classList.add('error'); }
        }
      } catch(err){
        if(statusEl){
          statusEl.textContent = 'Network error — please check your connection and try again.';
          statusEl.classList.add('error');
        }
      } finally {
        if(submitBtn){ submitBtn.disabled = false; submitBtn.textContent = originalText; }
      }
    });
  });
});
