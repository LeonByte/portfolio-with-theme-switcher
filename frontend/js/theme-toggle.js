document.getElementById('theme-toggle').addEventListener('click', function() {
    let currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode');

    // Store the theme in cookies with expiry date
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1); // Set expiration for 1 year
    document.cookie = `theme=${currentTheme}; expires=${expiryDate.toUTCString()}; path=/`;
});

// Set theme on page load based on cookies
window.addEventListener('load', function() {
    const theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, "$1") || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
