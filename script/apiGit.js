document.addEventListener("DOMContentLoaded", function() {
    const username = 'donizeti26'; // Substitua pelo seu nome de usuário do GitHub
    const reposUrl = `https://api.github.com/users/${username}/repos`;
  
    fetch(reposUrl)
      .then(response => response.json())
      .then(repos => {
        const projetosDiv = document.getElementById('projetos');
        repos.forEach(repo => {
          const projetoDiv = document.createElement('div');
          projetoDiv.classList.add('projeto');
  
          const projectLink = document.createElement('a');
          projectLink.href = repo.html_url;
          projectLink.target = '_blank';
          projectLink.textContent = repo.name;
  
          const projectDescription = document.createElement('p');
          projectDescription.textContent = repo.description;
  
          projetoDiv.appendChild(projectLink);
          projetoDiv.appendChild(projectDescription);
  
          projetosDiv.appendChild(projetoDiv);
        });
      })
      .catch(error => console.error('Erro ao obter os repositórios:', error));
  });
  