
window.addEventListener('DOMContentLoaded', () => {
    displayPlatformVersion();
});

function displayPlatformVersion() {
    let platformVersionEl = document.getElementById('platform-version');
    platformVersionEl.innerText = process.platform;
}