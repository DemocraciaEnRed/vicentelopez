import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import AcercaDe from './pages/acerca-de'
import Datos from './pages/datos'
import TyC from './pages/terminos-y-condiciones'
import Reglamento from './pages/reglamento'
import Herramientas from './pages/herramientas'

router.childRoutes.unshift({
  path: 's/acerca-de',
  component: AcercaDe
})

router.childRoutes.unshift({
  path: 's/datos',
  component: Datos
})

router.childRoutes.unshift({
  path: 's/terminos-y-condiciones',
  component: TyC
})

router.childRoutes.unshift({
  path: 's/reglamento',
  component: Reglamento
})

router.childRoutes.unshift({
  path: 's/herramientas',
  component: Herramientas
})