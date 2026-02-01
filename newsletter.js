/**
 * Newsletter Form Handler
 * Works with Buttondown embed forms
 * Add this script to any page with a .newsletter-form element
 */

document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('.newsletter-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
      const emailInput = form.querySelector('input[type="email"]');
      const originalText = submitBtn.textContent || submitBtn.value;
      
      // Show loading state
      if (submitBtn.tagName === 'BUTTON') {
        submitBtn.textContent = 'Subscribing...';
      } else {
        submitBtn.value = 'Subscribing...';
      }
      submitBtn.disabled = true;
      
      try {
        // Submit to Buttondown
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Buttondown doesn't support CORS
        });
        
        // Show success (can't read response due to no-cors, assume success)
        if (submitBtn.tagName === 'BUTTON') {
          submitBtn.textContent = '✓ Subscribed!';
        } else {
          submitBtn.value = '✓ Subscribed!';
        }
        submitBtn.style.backgroundColor = '#22c55e';
        emailInput.value = '';
        
        // Show success message
        showMessage(form, 'success', 'Check your email to confirm your subscription!');
        
        // Reset button after 3 seconds
        setTimeout(() => {
          if (submitBtn.tagName === 'BUTTON') {
            submitBtn.textContent = originalText;
          } else {
            submitBtn.value = originalText;
          }
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 3000);
        
      } catch (error) {
        // Show error
        if (submitBtn.tagName === 'BUTTON') {
          submitBtn.textContent = 'Error - Try Again';
        } else {
          submitBtn.value = 'Error - Try Again';
        }
        submitBtn.style.backgroundColor = '#ef4444';
        
        showMessage(form, 'error', 'Something went wrong. Please try again.');
        
        setTimeout(() => {
          if (submitBtn.tagName === 'BUTTON') {
            submitBtn.textContent = originalText;
          } else {
            submitBtn.value = originalText;
          }
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  });
  
  function showMessage(form, type, text) {
    // Remove any existing message
    const existing = form.parentElement.querySelector('.newsletter-message');
    if (existing) existing.remove();
    
    const message = document.createElement('p');
    message.className = `newsletter-message newsletter-${type}`;
    message.textContent = text;
    message.style.cssText = type === 'success' 
      ? 'color: #22c55e; margin-top: 0.5rem; font-size: 0.875rem;'
      : 'color: #ef4444; margin-top: 0.5rem; font-size: 0.875rem;';
    
    form.parentElement.insertBefore(message, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => message.remove(), 5000);
  }
});
