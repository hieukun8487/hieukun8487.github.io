document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'TMVHKAI5FLPQGM692FHKTHK') {
        window.location.href = 'main.html';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error Key Active!',
            text: 'Key Wrong.',
            background: '#1e1e1e',
            color: '#e0e0e0'
        });
    }
});