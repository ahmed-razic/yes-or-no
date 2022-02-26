class FetchData {
  constructor() {
    this.apiEndPoint = 'https://yesno.wtf/api';
    this.helperFunctions = new HelperFunctions();
    this.elements = new DomElements();
  }

  async getData() {
    this.elements.results.startButton.setAttribute('disabled', 'disabled');
    const response = await fetch(this.apiEndPoint);
    console.log(response);
    if (response.status !== 200) {
      this.helperFunctions.showErrorData('Could not get data!');
      return;
    }
    const data = await response.json();
    return data;
  }
}
