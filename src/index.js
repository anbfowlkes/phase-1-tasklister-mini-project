// obj = {};

// document.addEventListener("DOMContentLoaded", (event) => {
//   console.log(event);
//   obj = event;
// })

// console.log(obj);

// // obj.forEach((key) => console.log(obj[key]));

let input = document.querySelector('#new-task-description');
console.log(input.value);
const ulHigh = document.querySelector('#high-tasks');
const ulMed = document.querySelector('#med-tasks');
const ulLow = document.querySelector('#low-tasks');
const submitter = document.querySelector('#create-task-form');
const deleter = document.querySelector('#deleter');
let counter = 0;

submitter.addEventListener("submit", (e) => {
  e.preventDefault();
  let priority = document.querySelector('#color-priority');
  let colorVal = priority.value;
  let value = input.value;
  console.log(value);
  if (value ==='') {
    alert('Please enter a valid string');
    return;
  }

  console.log(priority.value);
  let li = document.createElement('li');
  li.setAttribute('id', `li-${counter}`)
  if (colorVal == "High"){ 
    li.setAttribute("class", "highp");
    li.innerText = value;
    ulHigh.append(li);

    /////////////////////////////////////
    let inTo = document.createElement('input');
    inTo.setAttribute('type', 'text');
    inTo.setAttribute('id', `in-${counter}`);
    inTo.setAttribute('placeholder', 'new task');
    li.append(inTo);
    let inb = document.createElement('input');
    inb.setAttribute('type', 'submit');
    inb.setAttribute('id', `inb-${counter}`);
    inb.setAttribute('value','Change');
    //////////////////////////////////
    li.append(inb);
    ////Listener
    inb.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(inTo.value);
      li.innerText = inTo.value;


    })
    
}
  if (colorVal == "Medium"){ 
    li.setAttribute("class", "medp")
    li.innerText = value;
    ulMed.append(li);

    ///////////////////////////////
    let inTo = document.createElement('input');
    inTo.setAttribute('type', 'text');
    inTo.setAttribute('id', `in-${counter}`);
    inTo.setAttribute('placeholder', 'new task');
    li.append(inTo);
    let inb = document.createElement('input');
    inb.setAttribute('type', 'submit');
    inb.setAttribute('id', `inb-${counter}`);
    inb.setAttribute('value', 'Change');
    //////////////////////////////////////////////
    li.append(inb);

}
  if (colorVal == "Low"){ 
    li.setAttribute("class", "lowp")
    li.innerText = value;
    ulLow.append(li);

    ////////////////////////////////////
    let inTo = document.createElement('input');
    inTo.setAttribute('type', 'text');
    inTo.setAttribute('id', `in-${counter}`);
    inTo.setAttribute('placeholder', 'new task');
    li.append(inTo);
    let inb = document.createElement('input');
    inb.setAttribute('type', 'submit');
    inb.setAttribute('id', `inb-${counter}`);
    inb.setAttribute('value', 'Change');
    ///////////////////////////
    li.append(inb);
}
  // li.innerText = value;
  // ul.append(li);
  input.value = '';
  counter++;
})

deleter.addEventListener("submit", e => {
  e.preventDefault();
  let bottom = document.querySelector('li:last-child');
  console.log(bottom);
  ul.removeChild(bottom);
})



