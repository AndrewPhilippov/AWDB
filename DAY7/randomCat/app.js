$('#btn').click(function(){
  $.ajax({
    method: 'GET',
    url: 'https://aws.random.cat/meow',
    dataType: 'JSON'
  })
  .done(function(data){
    $('#image').attr('src', data.file);
  })
  .fail(function(err){
    console.log('Oh hell nooooo... Some Error Happened: ' + err);
  })
});