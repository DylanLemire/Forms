    // JavaScript code for form validation
	// Prevent form from submitting
      // Retrieve the input field value
      // Regular expression pattern for alphanumeric input
      // Check if the input value matches the pattern
        // Valid input: display confirmation and submit the form
        // Invalid input: display error message
myForm.addEventListener('submit', function(e){
	let input = document.getElementById('inputField');
	let regex = /^[0-9a-zA-Z]+$/;
	if(input.value.match(regex)){
		window.alert('Form Submitted');
		} else{
			window.alert('Invalid input, please only use alphanumeric characters');
			e.preventDefault();
	}})
	