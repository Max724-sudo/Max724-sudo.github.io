var test = document.querySelector(".click");
var manushow = document.querySelector(".menu")
test.addEventListener("click", () => {

    // console.log("hej")
    if(manushow.style.display == "none") { 
     manushow.style.display = "block"
    } else
    {
manushow.style.display = "none"
    }
    
    
})

