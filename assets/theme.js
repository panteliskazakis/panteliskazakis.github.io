/* Apply the theme before the stylesheet paints, then connect the native button. */
(function () {
  'use strict';
  var key = 'pantelis-website-theme';
  var root = document.documentElement;
  var system = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var preference = null;
  var button = null;

  try {
    var saved = window.localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (error) {
    // Switching still works when browser storage is unavailable.
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (button) button.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  apply(preference || (system && system.matches ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', function () {
    button = document.getElementById('theme-toggle');
    if (!button) return;
    apply(root.getAttribute('data-theme'));
    button.addEventListener('click', function () {
      preference = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(preference);
      try { window.localStorage.setItem(key, preference); } catch (error) {}
    });
    button.hidden = false;
  });

  function systemChanged(event) {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  }
  if (system) {
    if (system.addEventListener) system.addEventListener('change', systemChanged);
    else if (system.addListener) system.addListener(systemChanged);
  }
}());
