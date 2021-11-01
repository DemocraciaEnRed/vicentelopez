import React from 'react'

export default function ThumbsVoto(props) {
  let icon = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.75 0C9.08152 0 9.39946 0.131696 9.63388 0.366117C9.8683 0.600537 10 0.918479 10 1.25V2.5H30V1.25C30 0.918479 30.1317 0.600537 30.3661 0.366117C30.6005 0.131696 30.9185 0 31.25 0C31.5815 0 31.8995 0.131696 32.1339 0.366117C32.3683 0.600537 32.5 0.918479 32.5 1.25V2.5H35C36.3261 2.5 37.5979 3.02678 38.5355 3.96447C39.4732 4.90215 40 6.17392 40 7.5V35C40 36.3261 39.4732 37.5979 38.5355 38.5355C37.5979 39.4732 36.3261 40 35 40H5C3.67392 40 2.40215 39.4732 1.46447 38.5355C0.526784 37.5979 0 36.3261 0 35V7.5C0 6.17392 0.526784 4.90215 1.46447 3.96447C2.40215 3.02678 3.67392 2.5 5 2.5H7.5V1.25C7.5 0.918479 7.6317 0.600537 7.86612 0.366117C8.10054 0.131696 8.41848 0 8.75 0V0ZM2.5 10V35C2.5 35.663 2.76339 36.2989 3.23223 36.7678C3.70107 37.2366 4.33696 37.5 5 37.5H35C35.663 37.5 36.2989 37.2366 36.7678 36.7678C37.2366 36.2989 37.5 35.663 37.5 35V10H2.5Z" fill="white"/>
  <rect x="26" y="16" width="7" height="7" fill="white"/>
  <rect x="17" y="16" width="7" height="7" fill="white"/>
  <rect x="8" y="16" width="7" height="7" fill="white"/>
  <rect x="26" y="25" width="7" height="7" fill="white"/>
  <rect x="17" y="25" width="7" height="7" fill="white"/>
  <rect x="8" y="25" width="7" height="7" fill="white"/>
  </svg>

  return (
    <section className="thumbs-voto info-landing">
      <div className="container-fluid">
        <div className="row cont fondo-cyan">
          <div className="subtitulo">
            <h3>{ props.texts['home-subtitle-text'] }</h3>
            <h2>{ props.texts['home-subtitle'] }</h2>
            <div className="icon">
              {icon}
            </div>
            {/* se cambio el texto porqeu se paso a etapa de votación */}
            {/* <p className="text-center">
              podés registrarte del<br/>
              <strong>20 de SEPTIEMBRE al 31 OCTUBRE</strong>
            </p>
            <div className="btn-container">
              <a href="https://votacionpp.vicentelopez.gov.ar" target='_blank' className="boton">
                QUIERO REGISTRARME
              </a>
            </div> */}
            {/* ------------------------ */}
            {/* ------CIERRE VOTACION---- */}
            {/* ------------------------ */}

            {/* <p className="text-center">
              podés votar del <br/>
              <strong>18 de OCTUBRE al 31 OCTUBRE</strong>
            </p>
            <div className="btn-container">
              <a href="https://votacionpp.vicentelopez.gov.ar" target='_blank' className="boton">
              QUIERO VOTAR
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}