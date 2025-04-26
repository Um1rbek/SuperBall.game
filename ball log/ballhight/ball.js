
const name = prompt("What is your name? ....")


let timeLeft = 60;
        let timerId = null;
        const timeDisplay = document.querySelector('.time');

        function updateTimer() {
            timeLeft--;
            timeDisplay.textContent = timeLeft;

            
            const ball = document.getElementById('ball');
            
                            function setRandomPosition() {
                                const maxX = window.innerWidth - 100;
                                const maxY = window.innerHeight - 100;
                                
                                const randomX = Math.floor(Math.random() * maxX);
                                const randomY = Math.floor(Math.random() * maxY);
                                
                                ball.style.left = randomX + 'px';
                                ball.style.top = randomY + 'px';
                            }
                            
                            // Sichqoncha ustiga kelganda
                            ball.addEventListener('mouseover', () => {
                                setRandomPosition();
                            });
                            
                            // Sahifa yuklanganda dastlabki pozitsiyani belgilash
                            window.onload = setRandomPosition;
                            
                            ball.addEventListener("click" , () => {
                                alert( name + " you are win")
                                window.location.href = '../log.html';
                            })
            
            if (timeLeft <= 0) {
                clearInterval(timerId);
                timeDisplay.textContent = window.location.href = '../log.html';
                window.location.href = '../log.html';


            }
        }


                     
   

        function startTimer() {
            if (timerId === null) {
                timeLeft = 60;
                timeDisplay.textContent = timeLeft;
                timerId = setInterval(updateTimer, 1000);
            }
        }