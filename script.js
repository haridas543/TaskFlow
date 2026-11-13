// Get navigation elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close mobile navigation menu
menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "×" : "☰";

});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation");

    menuToggle.textContent = "☰";

  });

});

// Display current year in footer
document.getElementById("year").textContent =
  new Date().getFullYear();


// Demo form validation
const demoForm = document.getElementById("demoForm");

const formMessage = document.getElementById("formMessage");

demoForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const team = document.getElementById("team").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // Check name
  if (name.length < 2) {

    showMessage(
      "Please enter a name with at least 2 characters.",
      true
    );

    document.getElementById("name").focus();

    return;
  }


  // Check email
  if (!emailPattern.test(email)) {

    showMessage(
      "Please enter a valid email address.",
      true
    );

    document.getElementById("email").focus();

    return;
  }


  // Check team size
  if (!team) {

    showMessage(
      "Please select your team size.",
      true
    );

    document.getElementById("team").focus();

    return;
  }


  // Success message
  showMessage(
    `Thanks, ${name}! Your demo request has been recorded for this preview.`,
    false
  );

  demoForm.reset();

});


// Function to display messages
function showMessage(message, isError) {

  formMessage.textContent = message;

  formMessage.classList.toggle("error", isError);

}