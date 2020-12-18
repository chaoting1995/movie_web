function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var response = JSON.parse(this.responseText);
    console.log(response);
  };
  xhr.open('GET', url, true);
  xhr.send();
}
makeRequest();
