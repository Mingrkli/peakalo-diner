// nav buttons
const navButtonSections = document.querySelectorAll('#nav-button-sections a')
// Page Sections
const pageSections = document.querySelectorAll('.page-sections')
// Check Out Email btn
const checkMenu = document.querySelector('#check-out-menu')
// Email
const emailInput = document.querySelector('#email-input');
const emailSubmitInput = document.querySelector('#email-input ~ button');
const emailError = document.querySelector('#email-input-error')

/* Event Listeners
========================================================================================*/
// Change to menu section when user presses check-out-menu button
checkMenu.addEventListener('click', () => {
    // The following hides & unselect all
    pageSections.forEach(e => {
        e.classList.add('hidden');
    })

    navButtonSections.forEach(e => {
        e.classList.remove('selected')
    }) 

    // Shows the menu and select it in the nav btns
    navButtonSections[1].classList.add('selected')
    document.querySelector('#menu-section').classList.remove('hidden')

    // Scrolls to top of page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

// Checks the email if valid when out of focus
emailInput.addEventListener('blur', () => {
    if (!emailInput.value.match(/\S+@\S+\.\S+/) && emailInput.value != '') {
        emailError.classList.add('show');
    }
    else {
        emailError.classList.remove('show');
    }
})

// Clears the error when user types in email
emailInput.addEventListener('input', () => {
    emailError.classList.remove('show');
})

/* For Loops
========================================================================================*/
// Change the selected class when clicked on nav btns
navButtonSections.forEach(e => {
    e.addEventListener('click', () => {
        // Remove selected class from all
        navButtonSections.forEach(btn => {
            btn.classList.remove('selected')
        });

        // user clicked becomes selected
        e.classList.add('selected');
        changeSection();
    })
})

/* Functions
========================================================================================*/
// Change the page sections depending on nav button with selected class
function changeSection() {
    pageSections.forEach(e => {
        e.classList.add('hidden');
    })

    if (navButtonSections[0].classList.contains('selected')) {
        document.querySelector('#home').classList.remove('hidden')
    }
    else if (navButtonSections[1].classList.contains('selected')) {
        document.querySelector('#menu-section').classList.remove('hidden')
    }
    else if (navButtonSections[2].classList.contains('selected')) {
        document.querySelector('#contact-section').classList.remove('hidden')
    }
}