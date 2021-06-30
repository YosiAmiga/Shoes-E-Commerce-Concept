/*Global function for changing colors*/ 
function changeColors(brand,shoeType,color,imgID) {
   
    let url = "images/" + brand + '/' + shoeType + '/' + color + 'J.' + 'jpg'
    document.getElementById(imgID).src = url

}

               

/*alert the user on adding to buying basket*/
function baskedAdd() {
  alert("This product was added to the basket!");
}

function register() {
    alert("Check your email to complete registration!");
}

/*File Upload alret*/
function fileUpload() {
    alert("File uploaded successfuly, Deal sent by email.");
}

/*Auction timer ya ben kelev*/
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#presentTime');
    startTimer(fiveMinutes, display);
};

/*add 100 to current bid function*/
var plusButton = document.getElementById("one");
var sum = 0;
var displaySum = document.getElementById("currendBid");
plusButton.addEventListener('click',function(){
    sum +=100;
    displaySum.innerText = sum;
}) 

var freeBid = document.getElementById("two");

/*add any number to current bid*/
freeBid.addEventListener('click',function(){
    var inputBid = document.getElementById("bidInput").value;
    console.log("Input bid: ", inputBid);
    sum = parseInt(inputBid) + parseInt(sum);
    displaySum.innerText = sum;
})
