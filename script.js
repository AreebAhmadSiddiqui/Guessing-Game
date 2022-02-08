let count=0
let c =Math.floor(Math.random()*100)+1;
document.querySelector(".btn").addEventListener("click", function () {
    let val = document.getElementById("ip").value;
    if (val < c) {
        count++
        document.getElementsByTagName("h3")[0].innerHTML="Too Low Try Again"
    }
    else if (val > c) {
        count++
        document.getElementsByTagName("h3")[0].innerHTML="Too High Try Again"
    }
    else {
        document.getElementsByTagName("h3")[0].innerHTML="Hoorah!!! You took "+count+" attempts Refresh to Play Again"
    }
})