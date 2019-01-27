var priceSpan = document.querySelector('.price');
var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.status == 200 && XHR.readyState == 4){
      var data = JSON.parse(XHR.responseText);
      var price = data.bpi.USD.rate;
      priceSpan.innerText = price;
    }
  }
  
  // 'https://api.coindesk.com/v1/bpi/currentprice/RUB.json' - for prices in Rubles && change currency value in price variable
  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
});