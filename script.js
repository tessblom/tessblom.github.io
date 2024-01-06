// Function to show the modal
function showModal() {
    document.getElementById('newsletterModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('newsletterModal').style.display = 'none';
}

// Set a timeout to show the modal after 5 seconds
setTimeout(showModal, 5000);