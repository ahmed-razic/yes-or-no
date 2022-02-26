let userName = '';
let userAnswer = '';
let serverData = {};

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
    results();
  });
}

async function results() {
  elements.results.startButton.setAttribute('disabled', 'disabled');
  elements.results.question.style.visibility = 'visible';
  await fetchData.getData().then(data => {
    serverData = { ...data };
    helperFunctions.setUiState(false);

    elements.results.yesButton.addEventListener('click', () => {
      userAnswer = 'yes';
      showResults(data, userAnswer);
    });
    elements.results.noButton.addEventListener('click', () => {
      userAnswer = 'no';
      showResults(data, userAnswer);
    });
  });
}

function showResults(data, userAnswer) {
  if (data.answer === userAnswer) {
    elements.results.result.innerHTML = 'Correct!';
    elements.results.resultsContainer.style.backgroundImage = `url(${data.image})`;
    helperFunctions.setUiState(true);
    elements.results.reset.removeAttribute('disabled');
  } else {
    elements.results.result.innerHTML = 'Wrong!';
    elements.results.resultsContainer.style.backgroundImage = `url(${data.image})`;
    helperFunctions.setUiState(true);
    elements.results.reset.removeAttribute('disabled');
  }
}
