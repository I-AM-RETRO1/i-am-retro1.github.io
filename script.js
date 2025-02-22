// Get all the links
const links = document.querySelectorAll('a');

// Get the current URL's path (relative part)
const currentUrl = window.location.pathname.split("/").pop();

// Loop through the links and add the 'active' class to the one that matches the current URL
links.forEach(link => {
  const linkHref = link.getAttribute('href').split("/").pop(); // Get the last part of the href

  if (linkHref === currentUrl) {
    link.classList.add('active'); // Add active class to the matching link
  }
});