// var timerID = setTimeout(function(){
//   console.log('This function will run in 10seconds');
// }, 10000);

// setTimeout(function(){
//   console.log('This cansels the first timout', timerID);
//   clearTimeout(timerID);
// }, 2000);

// var num = 0;
// var intervalId = setInterval(function(){
//   num++;
//   console.log('num: ', num);
//   if(num === 3){
//     clearInterval(intervalId);
//   }
// }, 1000);



function countDown(sec){
  var myInterval = setInterval(secInterval, 1000);
  function secInterval(){
    if(sec > 0){
      console.log('Timer: ' + sec);
      sec--;
    } else {
      console.log('Ring Ring Ring');
      clearInterval(myInterval);
    }
  };
}


countDown(5);

function countDown(sec) {
  let left = sec;
  let cd = setInterval(function(){
    console.log(--left>0?left:"Ring Ring Ring!!!");
    if (left == 0) clearInterval(cd);
  },1000)
}

function countDown(seconds) {
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer:", seconds);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}