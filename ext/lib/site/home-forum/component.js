import React from 'react'
import HomeProyectos from '../home-proyectos/component'
import HomePropuestas from '../home-propuestas/component'
import HomeAbout from '../home-about/component';

const HomeForum = (props) => {
  const { params: { forum } } = props
  switch (forum) {
    case 'propuestas':
      return <HomePropuestas {...props} />
    case 'acerca-de':
      return <HomeAbout {...props} />
    default:
      return <HomeProyectos {...props} />
  }
}

export default HomeForum
