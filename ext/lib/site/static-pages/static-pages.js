<<<<<<< HEAD
<<<<<<< HEAD
import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import AcercaDe from './pages/acerca-de'
import Datos from './pages/datos'

router.childRoutes.unshift({
  path: 's/datos',
  component: Datos
})
=======
import React from 'react'
import {Route} from 'react-router'
=======
>>>>>>> Corrige static pages
import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import AcercaDe from './pages/acerca-de'

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
  path: 's/acerca-de',
  component: AcercaDe
})
>>>>>>> Corrige static pages
