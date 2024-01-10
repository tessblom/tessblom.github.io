
// Function to load the navbar content
function loadNavbar() {
    // Use fetch to get the content of navbar.html
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            // Insert the content into the navbarContainer div
            document.getElementById('navbarContainer').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Call the function to load the navbar when the page loads
window.onload = loadNavbar;

// // Function to show the modal
// function showModal() {
//     document.getElementById('newsletterModal').style.display = 'block';
// }

// // Function to close the modal
// function closeModal() {
//     document.getElementById('newsletterModal').style.display = 'none';
// }

// // Set a timeout to show the modal after 5 seconds
// setTimeout(showModal, 1000);
// Get the modal element
// Get the modal element
var modal = document.getElementById('newsletterModal');

// Get the close button (x) element
var closeButton = document.querySelector('.close');

// Function to show the modal
function showModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Check if the user has seen the modal before
var hasSeenModal = document.cookie.indexOf('seenModal=true') !== -1;

// If the user has not seen the modal, show it
if (!hasSeenModal) {
    // Set a cookie to remember that the user has seen the modal
    document.cookie = 'seenModal=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

    // Set a timeout to show the modal after 5 seconds
    setTimeout(showModal, 5000);
}

// Close the modal when clicking the close button
closeButton.addEventListener('click', closeModal);

// Close the modal when clicking outside the modal
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        closeModal();
    }
});



// navbar
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

