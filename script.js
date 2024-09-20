/*character limit on name*/
var myText0 = document.getElementById("Fname");
var result0 = document.getElementById("result_fn");
var namelimit = 50;
result0.textContent = 0 + "/" + namelimit;
myText0.addEventListener("input", function(){
  var textLen0 = myText0.value.length;
  result0.textContent = textLen0 + "/" + namelimit;
})

/*character limit on address1 & 2*/
var myText1 = document.getElementById("Vaddress1");
var result1 = document.getElementById("result_ad1");
var addrlimit = 100;
result1.textContent = 0 + "/" + addrlimit;
myText1.addEventListener("input", function(){
  var textLen1 = myText1.value.length;
  result1.textContent = textLen1 + "/" + addrlimit;
})

var myText2 = document.getElementById("Vaddress2");
var result2 = document.getElementById("result_ad2");
result2.textContent = 0 + "/" + addrlimit;
myText2.addEventListener("input", function(){
  var textLen2 = myText2.value.length;
  result2.textContent = textLen2 + "/" + addrlimit;
})

/*character limit on city*/
var myText3 = document.getElementById("Vcity");
var result3 = document.getElementById("result_city");
result3.textContent = 0 + "/" + addrlimit;
myText3.addEventListener("input", function(){
  var textLen3 = myText3.value.length;
  result3.textContent = textLen3 + "/" + addrlimit;
})

/*character limit on summary*/
var myText4 = document.getElementById("Vsummary");
var result4 = document.getElementById("result_textbox");
var paralimit = 300;
result4.textContent = 0 + "/" + paralimit;
myText4.addEventListener("input", function(){
  var textLen4 = myText4.value.length;
  result4.textContent = textLen4 + "/" + paralimit;
})


// Function to handle multiple selections for specific dropdowns
const datePicker = document.getElementById('date-picker');
const selectedDatesDisplay = document.getElementById('selected-dates');
const form = document.querySelector('form');

// Update selected dates display
datePicker.addEventListener('change', () => {
  const selectedDates = Array.from(datePicker.querySelectorAll('input[type="checkbox"]:checked'))
  .map(input => input.value);
  selectedDatesDisplay.textContent = 'Selected Dates: ' + selectedDates.join(', ');
});

// Validate form before submission
form.addEventListener('submit', (event) => {
const checkboxes = datePicker.querySelectorAll('input[type="checkbox"]');
const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

if (!isChecked) {
  alert('Please select at least one date.');
  event.preventDefault(); // Prevent form submission
  }
});

// Make sure clicking the label opens the file picker
input_label.addEventListener('click', () => {
  input_file.click();
});
