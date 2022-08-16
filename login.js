document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'nitul@gmail.com' && password === '321') {
        window.location.href = 'deposit.html';

    }
    else {
        alert('please enter valid information')
    }



})