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
  insertActor: function (actorName_, movieName_) {
    const insertQuery = `INSERT INTO actorDetails (actorName, movieName) VALUES (:actorName,:movieName) returning ID`
    return sequelizeActors.query(insertQuery, {replacements:{actorName:actorName_,movieName:movieName_}})
  }
}

module.exports = operations