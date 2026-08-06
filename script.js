function revealEmail(event) {
  event.preventDefault();
  const link = document.getElementById("contact-link");

  // Replace with your actual email address
  const myEmail = "princexeon23@gmail.com";
  const contact = "Contact";

  if (link.textContent === myEmail) {
    link.classList.add("fade");

    setTimeout(() => {
      link.textContent = contact;
      link.style.textTransform = "uppercase";

      link.style.maxWidth = "300px";

      setTimeout(() => {
        // Fade in and expand back out smoothly
        link.classList.remove("fade");
      }, 10);
    }, 400);
  } else {
    link.classList.add("fade");

    setTimeout(() => {
      // Change text and disable uppercase styling
      link.textContent = myEmail;
      link.style.textTransform = "uppercase";

      // Expand max-width to comfortably fit the email address length
      link.style.maxWidth = "300px";

      setTimeout(() => {
        // Fade in and expand back out smoothly
        link.classList.remove("fade");
      }, 10);
    }, 400);
  }
}
