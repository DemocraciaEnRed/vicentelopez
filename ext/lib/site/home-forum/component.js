import React from 'react'
import HomeProyectos from '../home-proyectos/component'
import HomePropuestas from '../home-propuestas/component'

const HomeForum = (props) => {
  const { params: { forum } } = props
  switch (forum) {
    case 'propuestas':
      return <HomePropuestas {...props} />
    default:
      return <HomeProyectos {...props} />
  }
}

export default HomeForum
