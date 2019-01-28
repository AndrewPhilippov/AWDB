$('#getBtn').click(function(){
  $.get('https://api.github.com/users/andrewphilippov')
  .done(function(data){
    console.log(data);
  })
  .fail(function(err){
    console.log('Error: '+ err);
  })
});

$('#postBtn').click(function(){
  $.post('https://vestawax.com', {
    name:     'Andrew',
    lastName: 'Philippov',
    age:      32
  })
    .done(function(){
      console.log('HI!')
    })
    .fail(function(err){
      console.log('That could not happen... '+err);
    })
});

$('#getJSONBtn').click(function(){
  $.getJSON('https://api.github.com/users/andrewphilippov')
  .done(function(data){
    console.log(data);
  })
  .fail(function(err){
    console.log('Error: ' + err);
  })
});