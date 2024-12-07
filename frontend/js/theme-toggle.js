document.getElementById('theme-toggle').addEventListener('click', function() {
    let currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode');

    // Store the theme in cookies
    document.cookie = "theme=" + currentTheme + ";path=/";
});
