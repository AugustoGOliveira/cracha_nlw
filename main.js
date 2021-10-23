const linksSocialMedia = {
  github: 'AugustoGOliveira',
  instagram: 'augustogoliveira92',
  facebook: 'augusto.gomesdeoliveira'
}

function changeSocialMediaLinks() {
  for (const li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProflesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      userLink.href = data.html_url
      userBio.textContent = data.bio
    })
}

getGitHubProflesInfos()
