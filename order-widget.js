(function () {
  'use strict';

  var API_BASE = window.USAYEED_API_BASE || 'https://api.usayeed.com';
  var ORDER_PATH = '/api/orders';

  var CTA_SERVICE = {
    'start your build': 'New Project',
    'secure your allocation': 'Capacity / Allocation Hold',
    'initiate project': 'Project Initiation',
    'submit your concept': 'Concept Review',
    'go all-in': 'Full Engagement',
    'get started': 'New Project',
    'request a quote': 'Quote Request',
    'start a project': 'New Project'
  };

  var BUDGETS = ['Under $5k', '$5k - $15k', '$15k - $50k', '$50k - $150k', '$150k+', 'Not sure yet'];
  var TIMELINES = ['ASAP', '1 - 2 months', '3 - 6 months', '6+ months', 'Just exploring'];

  var overlay = null;

  function injectStyles() {
    if (document.getElementById('usayeed-order-css')) return;
    var link = document.createElement('link');
    link.id = 'usayeed-order-css';
    link.rel = 'stylesheet';
    link.href = '/order-widget.css';
    document.head.appendChild(link);
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        if (k === 'text') node.textContent = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      }
    }
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  function option(value) {
    return el('option', { value: value, text: value });
  }

  function field(labelText, control, hint) {
    var wrap = el('label', { 'class': 'uy-field' });
    wrap.appendChild(el('span', { 'class': 'uy-label', text: labelText }));
    wrap.appendChild(control);
    if (hint) wrap.appendChild(el('small', { 'class': 'uy-hint', text: hint }));
    return wrap;
  }

  function input(name, type, placeholder, required) {
    var i = el('input', { name: name, type: type || 'text', autocomplete: 'on' });
    if (placeholder) i.placeholder = placeholder;
    if (required) i.required = true;
    return i;
  }

  function select(name, values, placeholder) {
    var s = el('select', { name: name });
    s.appendChild(el('option', { value: '', text: placeholder || 'Select...' }));
    values.forEach(function (v) { s.appendChild(option(v)); });
    return s;
  }

  function buildModal() {
    var backdrop = el('div', { 'class': 'uy-backdrop', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Place an order' });

    var card = el('div', { 'class': 'uy-card' });

    var close = el('button', { 'class': 'uy-close', type: 'button', 'aria-label': 'Close' });
    close.innerHTML = '&times;';
    close.addEventListener('click', closeModal);

    card.appendChild(close);
    card.appendChild(el('p', { 'class': 'uy-kicker', text: 'USAYEED' }));
    card.appendChild(el('h2', { 'class': 'uy-title', text: 'Start your order' }));
    card.appendChild(el('p', { 'class': 'uy-sub', text: 'Tell us what you need built. We reply within one business day.' }));

    var form = el('form', { 'class': 'uy-form', novalidate: 'novalidate' });

    form.appendChild(el('input', { type: 'hidden', name: 'service' }));
    form.appendChild(el('input', { type: 'hidden', name: 'source' }));
    form.appendChild(el('input', { type: 'text', name: 'website', 'class': 'uy-hp', tabindex: '-1', autocomplete: 'off', 'aria-hidden': 'true' }));

    var row1 = el('div', { 'class': 'uy-row' });
    row1.appendChild(field('Full name *', input('name', 'text', 'Jane Doe', true)));
    row1.appendChild(field('Work email *', input('email', 'email', 'jane@company.com', true)));
    form.appendChild(row1);

    var row2 = el('div', { 'class': 'uy-row' });
    row2.appendChild(field('Company', input('company', 'text', 'Company / project name')));
    row2.appendChild(field('Phone', input('phone', 'tel', 'Optional')));
    form.appendChild(row2);

    var row3 = el('div', { 'class': 'uy-row' });
    row3.appendChild(field('Budget', select('budget', BUDGETS, 'Select budget')));
    row3.appendChild(field('Timeline', select('timeline', TIMELINES, 'Select timeline')));
    form.appendChild(row3);

    var details = el('textarea', { name: 'details', rows: '4' });
    details.placeholder = 'Describe the product, hardware platform, and what success looks like.';
    details.required = true;
    form.appendChild(field('Project details *', details));

    var status = el('div', { 'class': 'uy-status', role: 'status', 'aria-live': 'polite' });
    form.appendChild(status);

    var submit = el('button', { 'class': 'uy-submit', type: 'submit', text: 'Place order' });
    form.appendChild(submit);

    var fallback = el('p', { 'class': 'uy-fallback' });
    fallback.appendChild(document.createTextNode('Prefer email? '));
    fallback.appendChild(el('a', { href: 'mailto:info@usayeed.com?subject=Order%20Enquiry', text: 'info@usayeed.com' }));
    form.appendChild(fallback);

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = typeof v === 'string' ? v.trim() : v; });

      if (!data.name || !data.email || !data.details) {
        status.className = 'uy-status uy-error';
        status.textContent = 'Please fill in your name, email and project details.';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
        status.className = 'uy-status uy-error';
        status.textContent = 'Please enter a valid email address.';
        return;
      }

      submit.disabled = true;
      status.className = 'uy-status';
      status.textContent = 'Sending...';

      fetch(API_BASE + ORDER_PATH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (j) {
            if (!r.ok) throw new Error(j.error || 'Something went wrong. Please try again.');
            return j;
          });
        })
        .then(function (j) {
          status.className = 'uy-status uy-success';
          status.textContent = 'Order received (' + (j.orderId || '') + '). We will get back to you within one business day.';
          form.querySelectorAll('input, textarea, select, button').forEach(function (n) {
            if (n.type !== 'hidden') n.disabled = true;
          });
        })
        .catch(function (err) {
          submit.disabled = false;
          status.className = 'uy-status uy-error';
          status.textContent = err && err.message ? err.message : 'Something went wrong. Please try again.';
        });
    });

    card.appendChild(form);
    backdrop.appendChild(card);

    backdrop.addEventListener('click', function (ev) {
      if (ev.target === backdrop) closeModal();
    });

    return backdrop;
  }

  var lastTrigger = null;

  function openModal(service, source) {
    injectStyles();
    lastTrigger = document.activeElement;
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = buildModal();
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    var svc = overlay.querySelector('input[name="service"]');
    var src = overlay.querySelector('input[name="source"]');
    if (svc) svc.value = service || 'General enquiry';
    if (src) src.value = source || '';
    var first = overlay.querySelector('input[name="name"]');
    if (first) first.focus();
  }

  function closeModal() {
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = null;
    document.body.style.overflow = '';
    if (lastTrigger && lastTrigger.focus) {
      try { lastTrigger.focus(); } catch (e) {}
    }
  }

  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && overlay) closeModal();
  });

  function isCta(a) {
    var href = a.getAttribute('href') || '';
    var mail = href.indexOf('mailto:') === 0 || href.indexOf('/cdn-cgi/l/email-protection') !== -1;
    var text = (a.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    return mail || Object.prototype.hasOwnProperty.call(CTA_SERVICE, text);
  }

  function labelFor(a) {
    var text = (a.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    return CTA_SERVICE[text] || 'General enquiry';
  }

  document.addEventListener(
    'click',
    function (ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest('a') : null;
      if (!a || !isCta(a)) return;
      ev.preventDefault();
      ev.stopPropagation();
      var source = location.pathname + ':' + (a.textContent || '').replace(/\s+/g, ' ').trim();
      openModal(labelFor(a), source);
    },
    true
  );

  window.USAYEED_ORDER = { open: openModal, close: closeModal };
})();
