const {catchAsync} = require('../utils')

module.exports = {
    getPlanets : catchAsync(require('./getPlanets')),
    createPlanet : catchAsync(require('./createPlanet'))
}