let userName = '';
const answer = '';

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
  }
});

elements.saveButton.addEventListener('click', () => {
  if (helperFunctions.isEmpty('Please enter your name')) return;
  helperFunctions.showUser(userName);
});

//fetchData.getData();
