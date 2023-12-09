const languageColors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    Ruby: "#701516",
    PHP: "#4F5D95",
    C: "#555555",
    "C#": "#178600",
    Go: "#00ADD8",
    TypeScript: "#2b7489",
    Swift: "#ffac45",
    HTML: "#e34c26",
    CSS: "#563d7c"
  };
  
  function getLanguageColor(language) {
    return languageColors[language] || "#000000";
  }
  
  fetch("https://api.github.com/users/oxijoined/repos")
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  
      data.forEach((repo) => {
        let languageColor = getLanguageColor(repo.language);
  
        document.getElementsByClassName("projects")[0].innerHTML += `
          <div class="project">
              <div class="project-title">
                  <a href="${repo.html_url}">${repo.name}</a>
              </div>
              <div class="project-description">
                  ${repo.description || "No description"}
              </div>
              <div class="project-details">
                  <div class="project-language">
                      <div class="project-language-color" style="background-color: ${languageColor}"></div>
                      <div class="project-language-name">${repo.language || "N/A"}</div>
                  </div>
                  <div class="project-stars">
                      ⭐ ${repo.stargazers_count}
                  </div>
              </div>
          </div>
        `;
      });
    });
  