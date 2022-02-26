class HelperFunctions {
  constructor() {
    this.elements = new DomElements();
  }

  isEmpty(message) {
    if (!this.elements.inputUserName.value || this.elements.inputUserName.value === '') {
      this.showError(message);
      return true;
    } else {
      return false;
    }
  }

  showError(message) {
    this.elements.errorName.innerHTML = message;
    setTimeout(() => {
      this.elements.errorName.innerHTML = '';
    }, 3000);
  }

  showUser(userName) {
    this.elements.inputUserContainer.style.display = 'none';
    this.elements.user.innerHTML = `Welcome ${userName}`;
    this.elements.showUserContainer.style.display = 'block';
    this.elements.results.startButton.removeAttribute('disabled');
  }

  setUiState(isDisabled) {
    if (isDisabled) {
      this.elements.results.yesButton.setAttribute('disabled', 'disabled');
      this.elements.results.noButton.setAttribute('disabled', 'disabled');
    } else {
      this.elements.results.yesButton.removeAttribute('disabled');
      this.elements.results.noButton.removeAttribute('disabled');
    }
  }

  async showResults(dataAnswer, userAnswer) {
    if (dataAnswer === userAnswer) {
      this.elements.results.result.innerHTML = 'You guessed it!';
    } else if (dataAnswer !== userAnswer) {
      this.elements.results.result.innerHTML = 'Wrong! Try again';
    }
  }
}
