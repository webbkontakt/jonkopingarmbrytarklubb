function toggleMeny() {
    const meny = document.getElementById("meny");
    meny.classList.toggle("visad");
}
window.addEventListener('scroll', function() {
    const meny = document.getElementById('meny');
    if (meny.classList.contains('visad')) {
        meny.classList.remove('visad');
    }
});
