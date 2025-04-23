

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (password === 'user') {
      // LocalStorage'ga username'ni saqlash
      localStorage.setItem('username', username);
  
      // Sahifani welcome.html ga yo'naltirish
      window.location.href = '../ballhight/ball.html';
    } else {
      document.getElementById('errorMsg').textContent = 'Incorrect password!';
    }
  });
  