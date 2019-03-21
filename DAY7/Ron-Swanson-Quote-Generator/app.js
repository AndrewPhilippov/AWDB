var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var Button = {
  xhr:    document.getElementById('xhr'),
  fetch:  document.getElementById('fetch'),
  jquery: document.getElementById('jquery'),
  axios:  document.getElementById('axios')
}
var displayQuote = document.getElementById('quote');

// ******************************
// XHR
// ******************************
Button.xhr.addEventListener('click', function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(data){
    if(XHR.status == 200 && XHR.readyState == 4){
      var quote = JSON.parse(XHR.responseText);
      displayQuote.innerText = quote;
    }
  }

  XHR.open('GET', url);
  XHR.send();

});
// ******************************
// Fetch
// ******************************
Button.fetch.addEventListener('click', function(){
  fetch(url)
    .then(handleInitialError)
    .then(parseIt)
    .then(showIt)
    .catch(handleError);
});

function parseIt(res){
  return res.json();
}
function showIt(data){
  displayQuote.innerText = data[0];
}
function handleError(err){
  console.log('Error accured: ' + err);
}
function handleInitialError(res){
  if(!res.ok){
    throw Error('CUSTOM Error! '+ res.status);
  }
  return res;
}
// ******************************
// JQuery
// ******************************
$('#jquery').click(function(){
  $.getJSON(url)
    .done(function(data){
      $('#quote').text(data[0]);
    })
    .fail(function(err){
      console.log(err);
    })
});
// ******************************
// AXIOS
// ******************************
Button.axios.addEventListener('click', function(){
  axios.get(url)
  .then(function(res){
    displayQuote.innerText = res.data[0];
  })
  .catch(handleErrors);
});
function handleErrors(err){
  if(err.response){
    console.log('Problem With Response', err.response.status);
  } else if(err.request){
    console.log('Problem With Request!');
  } else {
    console.log('Error ', err.message);
  }
}