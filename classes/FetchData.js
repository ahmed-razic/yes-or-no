class FetchData {
  constructor() {
    this.apiEndPoint = 'https://yesno.wtf/api';
    this.helperFunctions = new HelperFunctions();
    this.elements = new DomElements();
  }

  getData(userAnwer) {
    this.elements.results.startButton.setAttribute('disabled', 'disabled');
    fetch(this.apiEndPoint)
      .then(response => response.json())
      .then(data => {
        console.log(data.answer);
        console.log(userAnswer);
        if (data.answer === userAnswer) {
          console.log('True');
          //this.elements.results.result.innerHTML = 'Correct!';
        } else if (data.answer !== userAnswer) {
          console.log('False');
          //this.elements.results.result.innerHTML = 'Wrong! Try Again!';
        }
      });
  }
}
