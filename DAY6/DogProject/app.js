var btn = document.querySelector('#btn');
var img = document.querySelector('#photo');

// Listen for click
btn.addEventListener('click', function(){
  // Make a request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      // Making object from string to get data
      // var data = JSON.parse(XHR.responseText);
      // // Loging photo URL string
      // console.log(data.message);
      var url = JSON.parse(XHR.responseText).message;
      img.src = url;
    }
  }

  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();
});