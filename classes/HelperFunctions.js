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

  setUiStatus(isDisabled) {
    if (!isDisabled) {
    }
  }
}
