let minNum ;
let maxNum ;
let attempts=0;
let guess;
let state = true;
let state2 = true;

while (state) {
  maxNum=window.prompt("Guess max number");
  minNum=window.prompt("Guess min number");
  let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  maxNum=Number(maxNum)
  minNum=Number(minNum)
  answer=Number(answer)
  
  if(maxNum-minNum==1 || maxNum-minNum==0){
    window.alert('The Numbers between muss be grater than 1 ')
  }else if(maxNum<=minNum){
    window.alert('Specefic a True Range')
  }else{

  if (isNaN(maxNum) ||  isNaN(minNum)){
    window.alert("Enter Two Valid Number!!")
  }else{
    guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
  
    while(state2){
      if (isNaN(guess)) {
        window.alert("Enter A Valid Guess !!");
      } else if (guess > maxNum || guess < minNum) {
        window.alert("The Guess is not in specific range!");
      } else {
        attempts++;
        if (guess > answer || guess < answer) {
          window.alert('try again!');
        }
        else {
          window.alert(`Correct! the answer is ${answer}. it took ${attempts} times for you to answer it. `);
        }
      }
      state2=false
    }
  }
  
  
  }
  state=false
}








