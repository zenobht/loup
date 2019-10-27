import recipes from './recipes.json'

const max = 1000
const min = 100

const generateRandomDelay = () => Math.round(Math.random() * (max - min) + min)

const fetch = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(recipes), generateRandomDelay())
  })

const API = { fetch }

export default API
