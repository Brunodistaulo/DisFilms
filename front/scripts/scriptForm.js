document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('movieForm');
    const limpiarBtn = document.getElementById('limpiar');

    limpiarBtn.addEventListener('click', function() {
        form.reset();
    });
});
