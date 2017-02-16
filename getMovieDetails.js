// const studioURLs = require('./readFileUsingPromise.js')
// const fileToRead = './studioURLs.txt'
// studioURLs(fileToRead)
//   .then((data) => {
//     const stringifiedURLs = data.toString()
//     const UrlArra = stringifiedURLs.split('\n')
//     return UrlArra

//   })
//   .then((UrlArray) => {
//     UrlArray.forEach((URL) => {
//       studioName = URL.split('/')[3]
//       console.log(studioName)
//       console.log(URL)
//       console.log(typeof URL)
      
//       const getData = () => (axios.get(URL))
//       getData()
//       .then((response) => {
//         console.log(`${studioName} + ${response.data}`)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   })
//   .catch(err => {
//     console.log(err)
//   })

//   })


const axios = require('axios')
const operations = require('./moviesDbOperations.js')
const getParamount = () => (axios.get('https://movie-api-lyalzcwvbg.now.sh/paramount'));

const getDreamworks = () => (axios.get('https://movie-api-lyalzcwvbg.now.sh/dreamworks'));

const getActors = () => (axios.get('https://movie-api-lyalzcwvbg.now.sh/actors'));


// getParamount()
// .then((response) => {
//   const studio = response.config.url.split('/')[3]
//   const movies = response.data
//   movies.forEach((movie) => {
//     operations.insertMovie(movie.movieName, movie.releaseDate, studio)
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   })
// })
// .catch((err) => {
//   console.log("error : ",err)
// })

// getDreamworks()
// .then((response) => {
//   const studio = response.config.url.split('/')[3]
//   const movies = response.data
//   movies.forEach((movie) => {
//     operations.insertMovie(movie.movieName, movie.releaseDate, studio)
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   })
// })
// .catch((err) => {
//   console.log("error : ",err)
// })

// getActors()
// .then((response) => {
//   const actors = response.data
//   actors.forEach((actor) => {
//     actor.movies.forEach((movie) => {
//       operations.insertActor(actor.actorName, movie)
//       .then((response) => {
//         console.log(response)
//       })
//       .catch((err) => {
//       console.log("error : ",err)
//       })
//     })
//   })

// })
// .catch((err) => {
//   console.log("error : ",err)
// })

// }


module.exports = {getParamount, getDreamworks, getActors}
