document.addEventListener("DOMContentLoaded", function() {
  const textArray = [
    "FULLSTACK DEVELOPER",
    "PROGRAMMER",
    "BACKEND DEVELOPER",
    "FRONTEND DEVELOPER",
    "SOFTWARE ENGINEER",
    "CODER",
    "TECH ENTHUSIAST"
  ];

  const typingText = document.getElementById("typing-text");
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 1000; // Delay before typing next word
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typingText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 300);
    }
  }

  setTimeout(type, 1000);
});

  // Replace "main.html" with your target file name!
  document.body.addEventListener("click", function (event) {
    // prevent clicks on buttons, links, icons, etc. from triggering navigation
    const isInteractive = event.target.closest("a, button, input, textarea, label, form");
    if (!isInteractive) {
      window.location.href = "AboutMeFinal.html"; // 👈 change this to your desired file
    }
  });
