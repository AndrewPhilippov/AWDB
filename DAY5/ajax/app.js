var XHR = new XMLHttpRequest();

var url = 'https://api.github.com/zen';


XHR.onreadystatechange = function(){
  if(XHR.readyState === 4){
    if(XHR.status === 200){
      header.innerText = XHR.responseText;
    } else {
      header.innerText = 'Some problem happened'
    }
  };
}

XHR.open('GET', url);
XHR.send();

var header = document.querySelector('.xhr');