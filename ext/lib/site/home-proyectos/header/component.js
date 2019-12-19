import React from 'react'

export default ({ stage }) => (
  <header className='banner-proyectos'>
    {/* <h1 className='proyectos-title'>{stage === 'votacion' ? 'Proyectos ganadores' : 'Seguimiento de proyectos' }</h1> */}
    {/* <h2 className='proyectos-subtitle'>{stage === 'votacion' ? 'Acá podes encontrar los proyectos ganadores de 2019' : 'Acá podés encontrar los proyectos que fueron aprobados en votaciones anteriores y ver en qué estado de su ejecución se encuentran.'}</h2> */}
    {/*  <h1 className='proyectos-title'>{stage === 'votacion' ? 'Proyectos Ganadores' : 'Seguimiento de proyectos' }</h1> */}
    {/* <h2 className='proyectos-subtitle'>{stage === 'votacion' ? 'Acá podés encontrar los proyectos ganadores que vamos a ejecutar en 2020' : 'Acá podés encontrar los proyectos que fueron aprobados en votaciones anteriores y ver en qué estado de su ejecución se encuentran.'}</h2> */}
    {/* <h1 className='proyectos-title'>Estamos trabajando, falta poco para que publiquemos los proyectos a votacion.</h1> */}
    <h1 className='proyectos-title'>Seguimiento de Proyectos</h1>
    <h2 className='proyectos-subtitle'>Acá podés encontrar los proyectos que fueron <b>ganadores</b> o <b>están aprobados</b> y ver en qué estado de su ejecución se encuentran.</h2>
  </header>
)
