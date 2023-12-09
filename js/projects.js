fetch("https://gh-pinned-repos.egoist.dev/?username=oxijoined")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
        console.log(repo.link)
      document.getElementsByClassName("projects")[0].innerHTML += `
                <div class="project">
                    <div class="project-title">
                        <a href="${repo.link.replace("\n                ","")}">${repo.repo}</a>
                    </div>
                    <div class="project-description">
                        ${repo.description}
                    </div>
                    <div class="project-language">
                        <div class="project-language-color" style="background-color: ${repo.languageColor}"></div>
                        <div class="project-language-name">${repo.language}</div>
                    </div>
                </div>
            `;
    });
  });