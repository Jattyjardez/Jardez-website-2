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
  if(SName === "" || SNum === ""){
    alert("Please fill all the required fields !!!");
    return;
  }

  alert("Form details are as follows:\nName: " + SName + "\nNumber: " + SNum);
  alert("Thanks for your submission!\nJardez Company LTD 🤝");
}
