
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
    if(document.body.style.backgroundColor==="antiquewhite"){
        document.body.style.backgroundColor="black"
    }
    else{
        document.body.style.backgroundColor="antiquewhite"
    }
}

let now = new Date();
let hour = now.getHours()

if (hour >= 6 && hour < 12) {
    alert('Good morning')
    console.log("Good morning");
    document.body.style.backgroundColor='white'
    
    
} else if (hour >= 12 && hour < 18) {
    alert('Good afternoon')
    console.log("Good day");
    document.body.style.backgroundColor='#fbe35f'
  
    
} else {
    alert('Good night')
    console.log("Good night");
    document.body.style.backgroundColor='black'   
   
}