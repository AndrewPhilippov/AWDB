var UIDisplay = {
  userImg:    document.querySelector('.user__image'),
  userTitle:  document.querySelector('.user__title'),
  userEmail:  document.querySelector('.user__email'),
  userName:   document.querySelector('.user__name'),
  userCity:   document.querySelector('.user__city'),
  userNic:    document.querySelector('.user__nic')
}

var UICtrlr = {
  btn:      document.querySelector('.btn')
}

var url = 'https://randomuser.me/api';

UICtrlr.btn.addEventListener('click', function(){
  fetch(url)
    .then(errorHandling)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

function errorHandling(res){
  // Error Handling
  if(!res.ok){
    throw Error('Custom Error: '+ res.status);
  }
  return res;
}

function parseJSON(response){
  // Parse JSON data from string to Object
  var data = response.json();
  return data;
}

function updateProfile(data){
  // Pick the variables values
  var getData  = data.results[0];
  var picture  = getData.picture.medium;
  var fullName = getData.name.title + ' ' + 
                 getData.name.first + ' ' + 
                 getData.name.last;
  var nic      = getData.login.username;
  var email    = getData.email;

  // Asign value to fields
  UIDisplay.userImg.src         = picture;
  UIDisplay.userNic.innerText   = nic;
  UIDisplay.userEmail.innerText = email;
  UIDisplay.userName.innerText  = firstLetterToUpperCase(fullName);
  UIDisplay.userCity.innerText  = firstLetterToUpperCase(data.results[0].location.city);
}

function printError(err){
  console.log(err);
}

// To upperCase first letter in every word in a sentense
function firstLetterToUpperCase(string){
  // First split the string
  var splitedString = string.split(' ');
  // Walk through every element in the array
  for(var i = 0; i<splitedString.length; i++){
    // Reasign every element's first letter to uppercase and add the rest in lowercase
    splitedString[i] = splitedString[i].charAt(0).toUpperCase() + splitedString[i].slice(1);
  }
  // Return connected string
  return splitedString.join(' ');
}