var Sequelize = require('sequelize')
var sequelizeMovies = new Sequelize
('postgres://vibhugulati:BL@CKB!RD1195@localhost:5432/moviesdb')
var sequelizeActors = new Sequelize
('postgres://vibhugulati:BL@CKB!RD1195@localhost:5432/actorsdb')

const operations = {
  insertMovie: function (movieName_, releaseDate_, studio_) {
    const insertQuery = `INSERT INTO moviedetails (movieName,releaseDate,studio) VALUES (:movieName,:releaseDate,:studio) returning ID`
    return sequelizeMovies.query(insertQuery, {replacements:{movieName:movieName_,releaseDate:releaseDate_,studio:studio_}})
  },
  readMovie: function (movieName) {
    const readQuery = `SELECT moviename, releasedate, studio FROM moviedetails where moviename='${movieName}'`
    return sequelizeMovies.query(readQuery)
    // , {replacements:{moviename:movieName_}})
  },
  insertActor: function (actorName_, movieName_) {
    const insertQuery = `INSERT INTO actorDetails (actorName, movieName) VALUES (:actorName,:movieName) returning ID`
    return sequelizeActors.query(insertQuery, {replacements:{actorName:actorName_,movieName:movieName_}})
  },
  readActor: function (movieName) {
    const readQuery = `SELECT actorname FROM actordetails where moviename='${movieName}'`
    return sequelizeActors.query(readQuery)
    // , {replacements:{moviename:movieName_}})
  }
}

module.exports = operations