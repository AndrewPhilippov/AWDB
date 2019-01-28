$('#btn').click(function(){
  $.ajax({
    method: 'GET',
    url: 'https://baconipsum.com/api/?type=meat-and-filler',
    type: 'JSON'
  })
  .done(addP)
  .fail(function(err){
    console.log('Oh no! Faild!!! - ' + err);
  })
});

function addP(data){
  $('p').text(data[0]);
}