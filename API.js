const postMovieDetails = require('./getMovieDetails.js')
const operations = require('./moviesDbOperations')
const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
let outputDetails = {}
// app.use(bodyParser.json())
// app.use(express.static('public'))

// app.set('view engine', 'ejs')
//./node_modules/.bin/eslint fileReadWrite.js --fix
app.get('/details', function (req, res) {
  postMovieDetails.getParamount()
  .then((response) => {
  const studio = response.config.url.split('/')[3]
  const movies = response.data
  movies.forEach((movie) => {
    const movieName = ((movie.movieName).replace(/ /,'')).toLowerCase()
    operations.insertMovie(movieName, movie.releaseDate, studio)
    .then((response) => {
      console.log(response)
      // res.send("succes for Paramount")
    })
    .catch((err) => {
      console.log(err)
    })
  })
})
.catch((err) => {
  console.log("error : ",err)
})

postMovieDetails.getDreamworks()
.then((response) => {
  const studio = response.config.url.split('/')[3]
  const movies = response.data
  movies.forEach((movie) => {
  const movieName = ((movie.movieName).replace(/ /,'')).toLowerCase()
    operations.insertMovie(movieName, movie.releaseDate, studio)
    .then((response) => {
      console.log(response)
      // res.send("succes for dreamworks")
      
    })
    .catch((err) => {
      console.log(err)
    })
  })
})
.catch((err) => {
  console.log("error : ",err)
})

postMovieDetails.getActors()
.then((response) => {
  const actors = response.data
  actors.forEach((actor) => {
    actor.movies.forEach((movie) => {
      movie = (movie.replace(/ /,'')).toLowerCase()
      operations.insertActor(actor.actorName, movie)
      .then((response) => {
      // res.send("succes for actors")
        console.log(response)
      })
      .catch((err) => {
      console.log("error : ",err)
      })
    })
  })

})
.catch((err) => {
  console.log("error : ",err)
})
})

app.get('/movie/:moviename', function (req, res) {
  // console.log(array)
  let movieName = req.params['moviename']
  // console.log(description)
  operations.readMovie(movieName)
    .then((response) => {
      // console.log(response)
      console.log(response[0])
      // console.log(response[0] instanceof Array)
      // console.log(response[0][0].moviename)
      // console.log(response[0].releasedate)
      // console.log(response[0].studio)      
      outputDetails['movieName'] = response[0][0].moviename
      outputDetails['releaseDate'] = response[0][0].releasedate
      outputDetails['studio'] = response[0][0].studio
      // res.redirect('/read')
      operations.readActor(movieName)
    .then((response) => {
      // console.log(response)
      // console.log(response)
      // console.log("actor : ",response[0])
      const actorsInMovie = response[0]
      outputDetails['actors'] = []
      actorsInMovie.forEach((actorInMovie) => {
        // console.log(actorInMovie)
        outputDetails['actors'].push(actorInMovie.actorname)

      })   
      res.send(outputDetails)    
      // res.redirect('/read')
    })
    .catch((response) => {
      console.log(response)
    })
    })
    .catch((response) => {
      console.log("movie : ",response)
    })
    
})

app.get('/result', function (req, res) {
  // console.log(outputDetails)
  res.send(outputDetails)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
