import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import AcercaDe from './pages/acerca-de'
import Datos from './pages/datos'
import TyC from './pages/terminos-y-condiciones'
import PoliticaDatos from './pages/politica-datos'
import Herramientas from './pages/herramientas'
import Encuentros from './pages/encuentros'
import Documentos from './pages/documentos'

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
  path: 's/politica-datos',
  component: PoliticaDatos
})

router.childRoutes.unshift({
  path: 's/encuentros',
  component: Encuentros
})

// router.childRoutes.unshift({
//   path: 's/herramientas',
//   component: Herramientas
// })

router.childRoutes.unshift({
  path: 's/documentos',
  component: Documentos
})
