var UICtrlr = {
  btn:      document.querySelector('.btn'),
  price:    document.querySelector('.price')
}



var url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

UICtrlr.btn.addEventListener('click', function(){
  fetch(url)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      UICtrlr.price.innerText = data.bpi.USD.rate;
    })
    .catch(function(error){
      console.log(error);
    })
});