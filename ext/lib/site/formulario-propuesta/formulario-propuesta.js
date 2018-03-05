import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import CrearPropuesta from './component'

router.childRoutes.unshift({
  path: 'formulario-propuesta',
  component: CrearPropuesta
})

router.childRoutes.unshift({
  path: 'formulario-propuesta/:id',
  component: CrearPropuesta
})
