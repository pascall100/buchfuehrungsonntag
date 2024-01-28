// Function to create a new account entry
function createAccount() {
    // Get the container element where new account entries will be added
    let container = document.getElementById('account-container');

    // Create a new div element for the account entry
    let accountDiv = document.createElement('div');
    accountDiv.classList.add('account'); // Add a 'account' class to the div

    // Create a sub-div element for the transaction details in the account entry
    let tAccountDiv = document.createElement('div');
    tAccountDiv.classList.add('t-account'); // Add a 't-account' class to the sub-div

    // Create an input element for entering notes
    let notesInput = document.createElement('input');
    notesInput.setAttribute('type', 'text');
    notesInput.setAttribute('placeholder', 'Notiz'); // Set a placeholder text for the input

    // Create a delete button for removing the entire account entry
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'; // Set the button text to 'Delete'
    deleteButton.classList.add('delete-button'); // Add a 'delete-button' class to the button
    deleteButton.onclick = function() {
        // Define a function to be executed when the delete button is clicked
        container.removeChild(accountDiv); // Remove the entire account entry from the container
    };

    // Create input elements for entering 'Soll' and 'Haben' values
    let sollInput = document.createElement('input');
    sollInput.setAttribute('type', 'text');
    sollInput.setAttribute('placeholder', 'Soll'); // Set a placeholder text for the input

    let habenInput = document.createElement('input');
    habenInput.setAttribute('type', 'text');
    habenInput.setAttribute('placeholder', 'Haben'); // Set a placeholder text for the input

    // Append the notes input, 'Soll' input, 'Haben' input, and delete button to the transaction details sub-div
    tAccountDiv.appendChild(notesInput);
    tAccountDiv.appendChild(sollInput);
    tAccountDiv.appendChild(habenInput);
    tAccountDiv.appendChild(deleteButton);

    // Append the transaction details sub-div to the main account entry div
    accountDiv.appendChild(tAccountDiv);

    // Append the main account entry div to the container
    container.appendChild(accountDiv);
}
// Function to create a new account entry
function createAccount() {
    // Get the container element where new account entries will be added
    let container = document.getElementById('account-container');

    // Create a new div element for the account entry
    let accountDiv = document.createElement('div');
    accountDiv.classList.add('account'); // Add a 'account' class to the div

    // Create a sub-div element for the transaction details in the account entry
    let tAccountDiv = document.createElement('div');
    tAccountDiv.classList.add('t-account'); // Add a 't-account' class to the sub-div

    // Create an input element for entering notes
    let notesInput = document.createElement('input');
    notesInput.setAttribute('type', 'text');
    notesInput.setAttribute('placeholder', 'Notiz'); // Set a placeholder text for the input

    // Create a delete button for removing the entire account entry
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'; // Set the button text to 'Delete'
    deleteButton.classList.add('delete-button'); // Add a 'delete-button' class to the button
    deleteButton.onclick = function() {
        // Define a function to be executed when the delete button is clicked
        container.removeChild(accountDiv); // Remove the entire account entry from the container
    };

    // Create input elements for entering 'Soll' and 'Haben' values
    let sollInput = document.createElement('input');
    sollInput.setAttribute('type', 'text');
    sollInput.setAttribute('placeholder', 'Soll'); // Set a placeholder text for the input

    let habenInput = document.createElement('input');
    habenInput.setAttribute('type', 'text');
    habenInput.setAttribute('placeholder', 'Haben'); // Set a placeholder text for the input

    // Append the notes input, 'Soll' input, 'Haben' input, and delete button to the transaction details sub-div
    tAccountDiv.appendChild(notesInput);
    tAccountDiv.appendChild(sollInput);
    tAccountDiv.appendChild(habenInput);
    tAccountDiv.appendChild(deleteButton);

    // Append the transaction details sub-div to the main account entry div
    accountDiv.appendChild(tAccountDiv);

    // Append the main account entry div to the container
    container.appendChild(accountDiv);
}
