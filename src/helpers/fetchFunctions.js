const heroImage = () => {
    return fetch('https://superheroapi.com/api/9106948396042621/character-id/image')
    .then((respondeu) => respondeu.json)
}

const heroName = () => {
   return fetch('https://superheroapi.com/api/9106948396042621/search/name')
    .then((respondeu) => respondeu.json)
}
