import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import CrearAnteproyecto from './component'

router.childRoutes.unshift({
  path: 'crear-anteproyecto',
  component: CrearAnteproyecto
})
