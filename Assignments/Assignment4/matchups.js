// Replace with your web app URL
const scriptUrl = "https://script.google.com/macros/s/AKfycbwWvJwvv-e0rKbVKGLrTgpGxt4LbrVSMRmf0xP4ADlg7Wx0RUo8NQHhWyF_qyBHuedq/exec";

// Fetch matchups from Google Sheets
fetch(scriptUrl)
  .then(response => response.json())
  .then(data => {
    // Select the widget area on the homepage
    const widget = document.getElementById("widget");

    // Format and display the matchups
    data.forEach((matchup, index) => {
      const matchupDiv = document.createElement("div");
      matchupDiv.classList.add("matchup");
      matchupDiv.innerHTML = `
        <h4>Matchup ${index + 1}</h4>
        <p><strong>${matchup.team1}</strong>: ${matchup.score1}</p>
        <p><strong>${matchup.team2}</strong>: ${matchup.score2}</p>
      `;
      widget.appendChild(matchupDiv);
    });
  })
  .catch(error => console.error("Error fetching matchups:", error));
