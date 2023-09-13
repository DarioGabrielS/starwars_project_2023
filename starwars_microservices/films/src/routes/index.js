const {Router} = require('express')
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router()

router.get('/',/* middlewares.nameValidator,*/ controllers.getFilms)
// En esta ruta get no tiene sentido real poner un middleware validador. Es mas
// va a dar error siempre porque espera un parametro "name" para poder ingresar a la ruta

module.exports = router