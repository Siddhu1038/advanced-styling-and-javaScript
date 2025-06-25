 // Quiz Logic
    function checkAnswer(answer) {
      const result = document.getElementById("quiz-result");
      if (answer === "8") {
        result.innerText = "Correct! 🎉";
        result.style.color = "green";
      } else {
        result.innerText = "Oops! Try again.";
        result.style.color = "red";
      }
    }

    // Fetch Weather from Open-Meteo API
    function fetchWeather() {
      fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current_weather=true')
        .then(response => response.json())
        .then(data => {
          const temp = data.current_weather.temperature;
          document.getElementById("weather-result").innerText = `Current temperature in India: ${temp}°C`;
        })
        .catch(() => {
          document.getElementById("weather-result").innerText = "Failed to fetch weather data.";
        });
    }