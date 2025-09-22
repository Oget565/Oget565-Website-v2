async function getWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=35.2271&longitude=-80.8431&current_weather=true";
  const response = await fetch(url);
  const data = await response.json();

  const temp = Math.round(data.current_weather.temperature); // rounded
  const code = data.current_weather.weathercode;

  const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Cloudy",
    45: "Fog",
    48: "Rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    95: "Thunderstorm",
    96: "Thunderstorm + hail",
    99: "Thunderstorm + heavy hail"
  };

  const desc = weatherCodes[code] || "Unknown";

  document.getElementById("weather").innerText = `${temp} °C, ${desc}`;
}

// Animation function for page load
function animateOnLoad() {
  const animatedElements = document.querySelectorAll('.animate-on-load');
  
  animatedElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
    }, index * 200); // Stagger each element by 200ms
  });
}

// Function to handle mobile viewport height
function setMobileViewportHeight() {
  // Calculate the actual viewport height
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--dynamic-vh', `${window.innerHeight}px`);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
  getWeather();
  setMobileViewportHeight();
  // Small delay to ensure page is fully loaded
  setTimeout(animateOnLoad, 100);
});

// Update viewport height on resize (handles mobile address bar show/hide)
window.addEventListener('resize', setMobileViewportHeight);
window.addEventListener('orientationchange', function() {
  setTimeout(setMobileViewportHeight, 100); // Small delay for orientation change
});

// Also call getWeather directly for immediate execution (backup)
getWeather();
