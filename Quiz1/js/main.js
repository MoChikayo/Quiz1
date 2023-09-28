// Select all menu links
const menuLinks = document.querySelectorAll('header nav ul li a');
// Add click event listeners to each menu link
menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the target section's ID from the link's href attribute
        const targetId = link.getAttribute('href').substring(1);

        // Find the target section by its ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Calculate the offset of the target section
            const offset = targetSection.offsetTop - document.querySelector('header').offsetHeight;

            // Scroll smoothly to the target section
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    });
});
// Function to determine the active section
function setActiveSection() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Loop through the content sections
    document.querySelectorAll('main section').forEach((section) => {
        // Calculate the top and bottom boundaries of each section
        const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
        const sectionBottom = sectionTop + section.clientHeight;

        // Check if the current scroll position is within the boundaries of a section
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            // Remove the "active" class from all menu items
            menuLinks.forEach((link) => {
                link.classList.remove('active');
            });

            // Get the ID of the active section
            const activeSectionId = section.getAttribute('id');

            // Find the corresponding menu item and add the "active" class
            const activeMenuItem = document.querySelector(`header nav ul li a[href="#${activeSectionId}"]`);
            if (activeMenuItem) {
                activeMenuItem.classList.add('active');
            }
        }
    });
}

// Add a scroll event listener to track the active section
window.addEventListener('scroll', setActiveSection);

// Initialize the active section when the page loads
window.addEventListener('load', setActiveSection);
