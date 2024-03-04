document.addEventListener('DOMContentLoaded', function () {
  const pongGame = document.querySelector('.pong-game');
  const paddleLeft = document.querySelector('.paddle-left');
  const paddleRight = document.querySelector('.paddle-right');
  const ball = document.querySelector('.ball');

  let ballPosition = { x: 0, y: 0 };
  let ballDirection = getRandomBallDirection();
  const ballSpeed = 4;
  const paddleSpeed = 4;

  function getRandomBallDirection() {
    const randomAngle = Math.random() * Math.PI * 2;
    return { x: Math.cos(randomAngle), y: Math.sin(randomAngle) };
  }

  function moveBall() {
    const ballRect = ball.getBoundingClientRect();
    const gameRect = pongGame.getBoundingClientRect();

    ballPosition.x += ballDirection.x * ballSpeed;
    ballPosition.y += ballDirection.y * ballSpeed;

    ball.style.transform = `translate(${ballPosition.x}px, ${ballPosition.y}px)`;

    movePaddle(paddleRight, 'top', calculatePaddleMovement(paddleRight));
    movePaddle(paddleLeft, 'top', calculatePaddleMovement(paddleLeft));

    handlePaddleCollision(paddleLeft, ballRect);
    handlePaddleCollision(paddleRight, ballRect);

    handleWallCollision(ballRect, gameRect);
  }

  function calculatePaddleMovement(paddle) {
    const paddleCenter = paddle.getBoundingClientRect().top + paddle.clientHeight / 2;
    const ballCenter = ball.getBoundingClientRect().top + ball.clientHeight / 2;

    if (ballCenter < paddleCenter) {
      return -paddleSpeed;
    } else {
      return paddleSpeed;
    }
  }

  function movePaddle(paddle, property, movement) {
    const maxTop = pongGame.clientHeight - paddle.clientHeight;
    paddle.style[property] = `${Math.min(Math.max(parseFloat(paddle.style[property] || '0') + movement, 0), maxTop)}px`;
  }

  function handlePaddleCollision(paddle, ballRect) {
    if (
      ballRect.left <= paddle.getBoundingClientRect().right &&
      ballRect.top <= paddle.getBoundingClientRect().bottom &&
      ballRect.bottom >= paddle.getBoundingClientRect().top
    ) {
      ballDirection.x = Math.abs(ballDirection.x);
    } else if (
      ballRect.right >= paddle.getBoundingClientRect().left &&
      ballRect.top <= paddle.getBoundingClientRect().bottom &&
      ballRect.bottom >= paddle.getBoundingClientRect().top
    ) {
      ballDirection.x = -Math.abs(ballDirection.x);
    }
  }

  function handleWallCollision(ballRect, gameRect) {
    if (ballRect.top <= gameRect.top || ballRect.bottom >= gameRect.bottom) {
      ballDirection.y = -ballDirection.y;
    } else if (ballRect.left <= gameRect.left || ballRect.right >= gameRect.right) {
      ballDirection.x = -ballDirection.x;
    }
  }

  setInterval(moveBall, 16);
});
