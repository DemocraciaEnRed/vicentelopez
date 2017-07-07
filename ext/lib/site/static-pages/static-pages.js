<<<<<<< HEAD
<<<<<<< HEAD
import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import AcercaDe from './pages/acerca-de'

router.childRoutes.unshift({
  path: 's/acerca-de',
  component: AcercaDe
})
=======
import React from 'react'
import {Route} from 'react-router'
=======
>>>>>>> Corrige static pages
import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import TerminosYCondiciones from './pages/terminos-y-condiciones'

<<<<<<< HEAD
const site = router.find((route) => route.key === 'lib-site')

site.props.children.unshift(
  <Route
    key='ext-terminos-y-condiciones'
    path='/s/terminos-y-condiciones'
    component={TerminosYCondiciones} />
)
>>>>>>> Agrega static-pages
=======
router.childRoutes.unshift({
  path: 's/terminos-y-condiciones',
  component: TerminosYCondiciones
})
>>>>>>> Corrige static pages
