let SName = "";
let SNum = "";

function greetUser(){
  let name = document.getElementById("nameInput").value;
  let ans = confirm("Are you sure?");
  
  if(ans){
      if(name === ""){
          alert("This field must not be empty. Pls try again!");
      }else{
          SName = name;   // FIXED
          alert("Name saved!");
      }
  }else{
      alert("Submission canceled...");
  }
}

function Num(){
  let num = document.getElementById("numInput").value;
  let ans = confirm("Are you sure?");
  
  if(ans){
      if(num === ""){
          alert("This field must not be empty. Pls try again!");
      }else{
          SNum = num;
          alert("Number saved!");
      }
  }else{
      alert("Submission canceled...");
  }
}

function show(){
  if(SName === ""){
    alert("Please enter your name and save it before you print out! ");
    return;
  }else if(SNum ===""){
    alert("Please enter your number and save it before you print out!);
          return;
  }else if (SName === "" || SNum === ""){
    alert("Please the name and the number are not filled and saved! ");
  }else{
    alert("Form details are as follows:\nName: " + SName + "\nNumber: " + SNum);
    alert("Thanks for your submission!\nJardez Company LTD 🤝");
  }
}
