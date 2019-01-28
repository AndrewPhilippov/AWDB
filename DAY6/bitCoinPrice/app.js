var priceSpanUSD = document.querySelector('.priceUSD');
var priceSpanRUB = document.querySelector('.priceRUB');
var btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.status == 200 && XHR.readyState == 4){
      var data = JSON.parse(XHR.responseText);
      var priceUSD = data.bpi.USD.rate;
      var priceRUB = data.bpi.RUB.rate;
      priceSpanUSD.innerText = priceUSD;
      priceSpanRUB.innerText = priceRUB;
    }
  }
  
  // 'https://api.coindesk.com/v1/bpi/currentprice/RUB.json' - for prices in Rubles && change currency value in price variable
  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice/RUB.json');
  XHR.send();
});