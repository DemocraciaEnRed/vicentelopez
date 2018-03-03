import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import CrearPropuesta from './component'

router.childRoutes.unshift({
  path: 'crear-propuesta',
  component: CrearPropuesta
})
