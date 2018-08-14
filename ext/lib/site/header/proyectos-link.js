import React from 'react'

export default () => {
  const forumsNames = ['villa-martelli', 'villa-adelina', 'vicente-lopez', 'olivos', 'munro', 'la-lucila', 'florida-oeste', 'florida-este', 'carapachay', 'proyectos']
  const isActive = forumsNames.includes(window.location.pathname.replace('/', ''))
  return (
    <a
      href='/proyectos'
      className={`header-link ${!~window.location.pathname.indexOf('proyectos') ? '' : 'active'}`}
      style={{ color: isActive && '#8C1E81' }}>
      Proyectos
    </a>
  )
}
