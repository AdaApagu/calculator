 let firstNum = document.getElementById('firstNum').value;
 let secondNum =document.getElementById('secondNum').value
 let answer =document.getElementById('answer');

 
 function add(){
   answer.textContent= firstNum+ secondNum;
   return answer.textContent;
  
 }
 
 function subtract(){
  let result = firstNum - secondNum;
  return result;
 }
 
 function divide(){
  let result = firstNum / secondNum;
  return result;
 }
 
 function multiply(){
  let result = firstNum * secondNum;
  return result;
 }
 
 