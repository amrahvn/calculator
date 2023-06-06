
let btn=document.getElementById('calc')

btn.onclick=()=>{
  

     let num1=parseInt(document.getElementById('amount').value)
     let num2=parseInt(document.getElementById('percentage').value+"%")
     let num3=parseInt(document.getElementById('monthly').value)

     if (isNaN(num1) || isNaN(num2)||isNaN(num3)) {
        document.getElementById("result").innerHTML = "Please,enter the number.";
        return;
    }


     let mebleg =num1*num2/100;
     let smebleg=num1+mebleg;
     let ayliqodeme=smebleg/num3

   document.getElementById('um').innerHTML="amount to be paid:"+smebleg+"Azn" 
   document.getElementById('res').innerHTML= "monthly payment:"+ ayliqodeme+"Azn" 
}

function light(){
    if(document.body.style.backgroundColor==="black"){
        document.body.style.backgroundColor="antiquewhite"
    }
    else{
        document.body.style.backgroundColor="black"
    }
}

// let now = new Date();
// let hour = now.getHours()

// if (hour >= 6 && hour < 12) {
//     alert('Good morning')
//     console.log("Good morning");
//     document.body.style.backgroundColor='white'
    
    
// } else if (hour >= 12 && hour < 18) {
//     alert('Good afternoon')
//     console.log("Good day");
//     document.body.style.backgroundColor='#fbe35f'
  
    
// } else {
//     alert('Good night')
//     console.log("Good night");
//     document.body.style.backgroundColor='black'   
   
// }


window.addEventListener('load', function() {
    var letter = document.querySelector('.letter');
    letter.style.opacity = '0';
    letter.style.transform = 'scale(0)';

    setTimeout(function() {
        letter.style.opacity = '1';
        letter.style.transform = 'scale(1)';
    }, 1000);
});

var animatedText = document.getElementById("animatedText");


animatedText.classList.add("animated");


animatedText.addEventListener("animationiteration", function() {
    this.style.color = getRandomColor();
});


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var circle = document.querySelector('.circle');

