<<<<<<< HEAD
import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import AcercaDe from './pages/acerca-de'
import Datos from './pages/datos'

router.childRoutes.unshift({
  path: 's/acerca-de',
  component: AcercaDe
})
<<<<<<< HEAD

router.childRoutes.unshift({
  path: 's/datos',
  component: Datos
})
=======
=======
import React from 'react'
import {Route} from 'react-router'
import 'lib/boot/routes'
import router from 'lib/site/boot/router'
import TerminosYCondiciones from './pages/terminos-y-condiciones'

const site = router.find((route) => route.key === 'lib-site')

site.props.children.unshift(
  <Route
    key='ext-terminos-y-condiciones'
    path='/s/terminos-y-condiciones'
    component={TerminosYCondiciones} />
)
>>>>>>> Agrega static-pages
>>>>>>> Agrega static-pages
