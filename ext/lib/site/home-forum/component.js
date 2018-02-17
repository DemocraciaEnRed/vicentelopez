import React from 'react'
import HomeProyectos from '../home-proyectos/component'
import HomeAnteproyectos from '../home-anteproyectos/component'

export default (props) => {
  const name = props.params.forum

  switch (name) {
    case 'anteproyectos':
      return <HomeAnteproyectos {...props} />
    default:
      return <HomeProyectos {...props} />
  }
}
