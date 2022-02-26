class DomElements {
  constructor() {
    this.inputUserName = document.querySelector('#inputUserName');
    this.saveButton = document.querySelector('#saveButton');
    this.inputUserContainer = document.querySelector('#inputUserContainer');
    this.showUserContainer = document.querySelector('#showUserContainer');
    this.input = document.querySelector('#inputUserContainer');
    this.user = document.querySelector('#userName');

    this.results = {
      startButton: document.querySelector('#startButton'),
      yesButton: document.querySelector('#yesButton'),
      noButton: document.querySelector('#noButton'),
      result: document.querySelector('#answer'),
      question: document.querySelector('#question'),
    };

    this.errorName = document.querySelector('#errorName');
    this.errorData = document.querySelector('#errorData');
  }
}
