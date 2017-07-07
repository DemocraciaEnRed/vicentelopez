import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import AcercaDe from './pages/acerca-de'

router.childRoutes.unshift({
  path: 's/acerca-de',
  component: AcercaDe
})
