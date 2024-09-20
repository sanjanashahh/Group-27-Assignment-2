// Get form and input fields
const form = document.getElementById('form')
const eventName = document.getElementById('eventName');
const eventDescription = document.getElementById('eventDescription');
const eventLocation = document.getElementById('eventLocation');
const skills = document.getElementById('skills');
const urgency = document.getElementById('urgency');
const eventDate = document.getElementById('eventDate');

// Prevent default form submission for testing (uncomment if needed)
form.addEventListener('submit', (e) => {
    // Validate Event Name
    if (eventName.value.trim().length > 100) {
        alert('Event Name cannot exceed 100 characters.');
        e.preventDefault(); // Prevent form submission if validation fails
        return;
    }

    // Validate Required Skills selection
    if (skills.selectedOptions.length === 0) {
        alert('Please select at least one skill.');
        e.preventDefault(); // Prevent form submission if validation fails
        return;
    }

    // Basic validation passed
    alert('Event created successfully!');
});

// For character count with max length
document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('eventName');
    const charCount = document.getElementById('charCount');

    inputField.addEventListener('input', function () {
        const currentLength = inputField.value.length;
        charCount.textContent = `${currentLength}/100 characters`; // Updates the char count
    });
}); 

//for multiselect droudown
document.addEventListener('DOMContentLoaded', function() {
    const customSelect = document.querySelector(".custom-select");
    const selectSelected = customSelect.querySelector(".select-selected");
    const selectItems = customSelect.querySelector(".select-items");
    const hiddenInput = document.getElementById("skills");
    const selectedSkills = [];

    selectSelected.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleDropdown();
    });

    selectItems.querySelectorAll("div").forEach(item => {
        item.addEventListener("click", function(e) {
            e.stopPropagation();
            toggleItem(this);
        });
    });

    function toggleDropdown() {
        selectSelected.classList.toggle("select-arrow-active");
        selectItems.classList.toggle("select-hide");
    }

    function toggleItem(item) {
        item.classList.toggle("selected");
        const value = item.getAttribute("data-value");
        const index = selectedSkills.indexOf(value);

        if (index > -1) {
            selectedSkills.splice(index, 1);
        } else {
            selectedSkills.push(value);
        }

        updateSelectedText();
        hiddenInput.value = selectedSkills.join(",");
    }

    function updateSelectedText() {
        selectSelected.textContent = selectedSkills.length === 0 ? "Select Skills" : selectedSkills.join(", ");
    }

    document.addEventListener("click", function() {
        selectSelected.classList.remove("select-arrow-active");
        selectItems.classList.add("select-hide");
    });

});










/*/for text box max length 100
var event_Name = document.getElementById ("eventName") ;
var result = document.getElementById("result");
var limit = 100;
result.Content = 0 + "/" + limit;

event_Name.addEventListener("input", function(){
    var inputLength = event_Name.value.length;
    result.textcontent = textLength + "/" + limit;

    if(inputLength > limit){
        event_Name.style.bordercolor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        event_Name.style.bordercolor = "#b2b2b2";
        result.style.color = "#737373";

    }

});



/*function validateForm() {
    const eventName = document.getElementById('eventName').value.trim();
    const eventDescription = document.getElementById('eventDescription').value.trim();
    const eventLocation = document.getElementById('eventLocation').value.trim();
    const skills = document.getElementById('skills').selectedOptions;
    const urgency = document.getElementById('urgency').value;
    const eventDate = document.getElementById('eventDate').value;

    // Validate Event Name
    if (eventName.length > 100) {
        alert('Event Name cannot exceed 100 characters.');
        return false;
    }

    // Validate Required Skills selection
    if (skills.length === 0) {
        alert('Please select at least one skill.');
        return false;
    }

    // Ensure that a date has been picked
    if (eventDate === "") {
        alert('Please select a valid event date.');
        return false;
    }

    // Basic validation passed
    alert('Event created successfully!');
    return true;
} */
