const socialMidias = {
  github: 'thiagopolettz',
  facebook: 'thiago.josemoserpoletto',
  instagram: 'thiagopoletto',
  twitter: 'redlikke'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMidias[social]}`
  }
}

changeSocialMediaLinks()

function getGithubAPI() {
  const url = `https://api.github.com/users/${socialMidias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userUrl.href = data.html_url
      userPic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubAPI()
