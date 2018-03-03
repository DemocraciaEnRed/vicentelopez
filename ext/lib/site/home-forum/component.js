import React from 'react'
import HomeProyectos from '../home-proyectos/component'
import HomeAnteproyectos from '../home-anteproyectos/component'

const HomeForum = (props) => {
  const { params: { forum } } = props
  switch (forum) {
    case 'anteproyectos':
      return <HomeAnteproyectos {...props} />
    default:
      return <HomeProyectos {...props} />
  }
}

export default HomeForum
