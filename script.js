// Show a greeting based on time
window.onload = function() {
    const greetingElement = document.createElement("p");
    greetingElement.style.fontWeight = "bold";
    greetingElement.style.marginTop = "10px";
  
    const hours = new Date().getHours();
    let greeting;
  
    if (hours < 12) {
      greeting = "🌅 Good Morning!";
    } else if (hours < 18) {
      greeting = "☀️ Good Afternoon!";
    } else {
      greeting = "🌙 Good Evening!";
    }
  
    greetingElement.textContent = greeting;
    document.querySelector("header").appendChild(greetingElement);
  };
  
  // Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  