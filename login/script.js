function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const warning = document.getElementById('warning');

    
    if (!email || !password) {
        warning.style.display = 'block';
    } else {
        
        window.location.href = '/assets/hello.html';
    }
}