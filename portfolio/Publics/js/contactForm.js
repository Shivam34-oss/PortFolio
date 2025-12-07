(function () {
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('cf-status');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      statusEl.textContent = 'Sending...';
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        subject: form.subject.value.trim(),
        message: form.message.value.trim(),
        hp: form.hp.value || ''
      };

      // basic client-side validation
      if (!data.name || !data.email || !data.message) {
        statusEl.textContent = 'Please fill name, email and message.';
        return;
      }

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        const result = await res.json();
        if (res.ok) {
          statusEl.textContent = 'Message sent — thank you!';
          form.reset();
        } else {
          statusEl.textContent = result.error || 'Error sending message';
        }
      } catch (err) {
        console.error('Contact fetch error', err);
        statusEl.textContent = 'Network error — try again later';
      }
    });
  })();