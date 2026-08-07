document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".artwork-card");

  const observerOptions = {
    root: document.querySelector("main"), // Your scroll container
    rootMargin: "0px",
    threshold: 1, // Trigger when 100% of the card is visible in the center
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove 'is-snapped' from other cards immediately
        cards.forEach((c) => c.classList.remove("is-snapped"));

        // Add a small delay (e.g., 150ms) before triggering the snapped state
        setTimeout(() => {
          if (
            entry.target.getBoundingClientRect().top >= 0 &&
            entry.target.getBoundingClientRect().top <= window.innerHeight * 0.5
          ) {
            entry.target.classList.add("is-snapped");
          }
        }, 1750);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });
});

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
