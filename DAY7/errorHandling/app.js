var btn = document.querySelector('.btn');
var url = 'https://api.github.com/users/andrewphilippov';

btn.addEventListener('click', function(){
  fetch(url)
    .then(errorHandling)
    .then(function(response){
      console.log('ok ', response);
    })
    .catch(function(error){
      console.log('There is a problem!: ', error);
    });
});

function errorHandling(res){
  if(!res.ok){
    throw Error('CUSTOM Error! '+ res.status);
  }
  return res;
}