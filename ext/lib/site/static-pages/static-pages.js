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
<<<<<<< HEAD
<<<<<<< HEAD

router.childRoutes.unshift({
  path: 's/datos',
  component: Datos
})
=======
=======
>>>>>>> Corrige Acerca De (clases CSS) y Datos.
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
<<<<<<< HEAD
>>>>>>> Agrega static-pages
=======
=======
=======

>>>>>>> Corrige Acerca De (clases CSS) y Datos.
router.childRoutes.unshift({
  path: 's/acerca-de',
  component: AcercaDe
})
<<<<<<< HEAD
>>>>>>> Corrige static pages
<<<<<<< HEAD
>>>>>>> Corrige static pages
=======
=======
>>>>>>> Corrige Acerca De (clases CSS) y Datos.
>>>>>>> Corrige Acerca De (clases CSS) y Datos.
