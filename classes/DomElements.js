class DomElements {
  constructor() {
    this.inputUserName = document.querySelector('#inputUserName');
    this.saveButton = document.querySelector('#saveButton');
    this.inputUserContainer = document.querySelector('#inputUserContainer');
    this.showUserContainer = document.querySelector('#showUserContainer');
    this.input = document.querySelector('#inputUserContainer');
    this.user = document.querySelector('#userName');

    this.results = {
      resultsContainer: document.querySelector('#resultsContainer'),
      startButton: document.querySelector('#startButton'),
      yesButton: document.querySelector('#yesButton'),
      noButton: document.querySelector('#noButton'),
      result: document.querySelector('#result'),
      question: document.querySelector('#question'),
      reset: document.querySelector('#resetButton'),
    };

    this.errorName = document.querySelector('#errorName');
    this.errorData = document.querySelector('#errorData');
  }
}
