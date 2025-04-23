


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const password = document.getElementById('password').value;
  
    if (password === 'user') {
      window.location.href = '../ballhight/ball.html';
    } else {
      document.getElementById('errorMsg').textContent = 'Incorrect password!';
    }
  });
  