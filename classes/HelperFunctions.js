class HelperFunctions {
  constructor() {
    this.userName = '';
    this.elements = new DomElements();
  }
  saveUserName(e) {
    this.elements.inputUserName.addEventListener('change', e => {
      this.userName = e.target.value;
      console.log(this.userName);
    });
  }
}
