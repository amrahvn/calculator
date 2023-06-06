
let btn=document.getElementById('calc')

btn.onclick=()=>{
  

     let num1=parseInt(document.getElementById('amount').value)
     let num2=parseInt(document.getElementById('percentage').value+"%")
     let num3=parseInt(document.getElementById('monthly').value)



     let mebleg =num1*num2/100;
     let smebleg=num1+mebleg;
     let ayliqodeme=smebleg/num3

   document.getElementById('um').innerHTML="amount to be paid:"+smebleg+"Azn" 
   document.getElementById('res').innerHTML= "monthly payment:"+ ayliqodeme+"Azn" 
}
