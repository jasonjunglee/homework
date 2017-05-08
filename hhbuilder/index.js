var householdList = [];

function createNew(age, relationship, smoker){
  var li = document.createElement("li");
  var text = age + " " + relationship + " ";
  text += (smoker) ? "smoker" : "non-smoker";
  li.appendChild(document.createTextNode(text));
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.appendChild(document.createTextNode("delete"));
  deleteButton.onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  };
  li.appendChild(deleteButton);
  var ul = document.getElementsByTagName("ol")[0];
  ul.appendChild(li);
  var form = document.getElementsByTagName("form")[0];
  form.reset();
  return {
    age: age,
    relationship: relationship,
    smoker: smoker
  };
}

function formIsValid(age, relationship){
  if(age && relationship){
    if(age <= 0){
      alert("you must be older then 0 to be able to do this no?");
    }
    if(isNaN(age) === true){
      alert("please enter a number");
    }else{
      return true;
    }
  }else{
    alert("please enter age and relationship");
  }
}

var addButton = document.getElementsByClassName("add")[0];
addButton.addEventListener("click", function(e){
  var age = document.getElementsByName("age")[0].value;
  var relationship = document.getElementsByName("rel")[0].value;
  var smoker = document.getElementsByName("smoker")[0].checked;
  if(formIsValid(age, relationship)) {
    householdList.push(createNew(age, relationship, smoker));
  }
  e.preventDefault();
});

document.addEventListener("submit", function(e){
  if(householdList.length > 0){
    var debug = document.getElementsByClassName("debug")[0];
    debug.appendChild(document.createTextNode(JSON.stringify(householdList)));
    debug.style.display = 'block';
    householdList = [];
  }
  e.preventDefault();
});






