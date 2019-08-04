document.addEventListener('DOMContentLoaded', function () {
    const p = document.getElementById('blurb');
    const years = (Date.now() - new Date(1997, 5, 18)) / (1000 * 60 * 60 * 24 * 365);
    p.innerText = p.innerText.replace('$(age)', Math.floor(years));
});