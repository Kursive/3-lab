const btn = document.getElementById('themeToggle');
const root = document.documentElement;
const body = document.body;

// Сохранять выбор в localStorage (опционально)
const LS_KEY = 'site-theme';

function applyTheme(isDark) {
  if (isDark) {
    body.classList.add('dark');
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = 'Светлая тема';
  } else {
    body.classList.remove('dark');
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = 'Тёмная тема';
  }
}

// Инициализация: сначала из localStorage, затем из prefers-color-scheme
const saved = localStorage.getItem(LS_KEY);
if (saved !== null) {
  applyTheme(saved === 'dark');
} else {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);
}

btn.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  applyTheme(isDark);
  localStorage.setItem(LS_KEY, isDark ? 'dark' : 'light');
});
