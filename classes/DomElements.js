class DomElements {
  constructor() {
    this.inputUserName = document.querySelector('#inputUserName');
    this.saveButton = document.querySelector('#saveButton');
    this.inputUserContainer = document.querySelector('#inputUserContainer');
    this.showUserContainer = document.querySelector('#showUserContainer');

    this.result = {
      yesButton: document.querySelector('#yesButton'),
      noButton: document.querySelector('#noButton'),
      answer: document.querySelector('#answer'),
    };

    this.error = document.querySelector('#error');
  }
}
