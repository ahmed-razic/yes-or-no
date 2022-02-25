class FetchData {
  constructor() {
    this.apiEndPoint = 'https://yesno.wtf/api';
  }

  getData() {
    fetch(this.apiEndPoint)
      .then(response => response.json())
      .then(data => console.log(data));
  }
}
