let userName = '';
let userAnswer = 'sss';

const elements = new DomElements();
const helperFunctions = new HelperFunctions();
const fetchData = new FetchData();

elements.inputUserName.addEventListener('input', e => {
  userName = e.target.value;
});

elements.inputUserName.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    if (helperFunctions.isEmpty('Please enter your name')) return;
    helperFunctions.showUser(userName);
    startGame();
  }
});

elements.saveButton.addEventListener('click', () => {
  if (helperFunctions.isEmpty('Please enter your name')) return;
  helperFunctions.showUser(userName);
  startGame();
});

function startGame() {
  elements.results.startButton.removeAttribute('disabled');
  elements.results.startButton.addEventListener('click', () => {
    userResponse();
  });
}

function userResponse() {
  elements.results.startButton.setAttribute('disabled', 'disabled');
  elements.results.question.style.visibility = 'visible';
  helperFunctions.setUiState(false);

  elements.results.yesButton.addEventListener('click', () => {
    helperFunctions.setUiState(true);
    userAnswer = 'yes';
    fetchData.getData(userAnswer);
  });
  elements.results.noButton.addEventListener('click', () => {
    helperFunctions.setUiState(true);
    userAnswer = 'no';
    fetchData.getData(userAnswer);
  });
}
