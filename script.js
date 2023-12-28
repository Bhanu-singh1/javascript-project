// Function to update date and time
function updateDateTime() {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateTime = currentDate.toLocaleDateString('en-US', options);

    // Update the content of the element with id "datetime"
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Call the function to update date and time when the page loads
updateDateTime();

// Update date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);