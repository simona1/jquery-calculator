
const ERROR_TEXT = 'Error';

function init() {
  $('#buttons-container > .buttons span').click(processButtonClick);
}

function processButtonClick(event) {
  const target = $(event.target);
  const screen = $('#screen');
  switch (target.attr('id')) {
    case 'clear':
      screen.text('');
      return;
    case 'equals':
      screen.text(evaluateExpression(screen.text()));
      return;
  }
  if (screen.text() !== ERROR_TEXT) {
    screen.append(target.text());
  }
}

function evaluateExpression(expression) {
  try {
    expression = expression.split('').map(c => {
      switch (c) {
        case 'x':
          return '*';
        case '÷':
          return '/';
      }
      return c;
    }).join('');
    const res = eval(expression);
    if (isNaN(res) || Math.abs(res) === 1 / 0) {
      return ERROR_TEXT;
    }
    return res;
  } catch (err) {
    return ERROR_TEXT;
  }
}

window.onload = init;
