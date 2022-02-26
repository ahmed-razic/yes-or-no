class FetchData {
  constructor() {
    this.apiEndPoint = 'https://yesno.wtf/api';
    this.helperFunctions = new HelperFunctions();
    this.elements = new DomElements();
    this.resultData = {};
  }

  async getData() {
    this.elements.results.startButton.setAttribute('disabled', 'disabled');
    const response = await fetch(this.apiEndPoint);
    const data = await response.json();
    return data;
  }
}
