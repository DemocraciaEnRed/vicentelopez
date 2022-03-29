import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import {Link} from 'react-router'
import PuntosDeVotacion from '../assets/puntos-de-votacion'
import config from 'lib/config'
import makeAsyncScript from 'react-async-script'

export default class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      now: new Date(),
      events: false,
      availableEvents: [],
      availableEventsId: [],
      unavailableEvents: [],
      currentEvent: undefined,
      isLoading: true,
      keys: [
        'id',
        'virtual',
        'cupoLleno',
        'barrio',
        'direccion',
        'dia',
        'mes',
        'anio',
        'inicioHora',
        'inicioMinuto',
        'finHora',
        'finMinuto',
        'fechaDiaLegible',
        'fechaHoraLegible',
        'linkLlamada'
      ]
    }
  }

  componentDidMount () {
    this.goTop()
    window.fetch(`https://sheets.googleapis.com/v4/spreadsheets/1p9RHiHfD7PpLYmEI0_ofCbk-2TYi7eqbm2ey5-UQ6Mw/values/Encuentros?key=${config.googleSheetApiKey}`)
      .then((res) => res.json())
      .then((res) => {
        this.extractData(res)
      })
      .catch((err) => console.error(err))
  }

  goTop () {
    window.scrollTo(0,0)
  }

  extractData (data) {
    // eslint-disable-next-line prefer-const
    let output = []
    let available = []
    let availableId = []
    let unavailableEvents = []
    data.values.forEach((entry, i) => {
      if (i === 0) return
      const marker = {}
      this.state.keys.forEach((k, i) => {
        marker[k] = entry[i] !== '' ? entry[i] : null
      })
      marker.fechaInicio = new Date(`${marker.anio}-${marker.mes}-${marker.dia}T${marker.inicioHora}:${marker.inicioMinuto}:00-0300`)
      marker.fechaFin = new Date(`${marker.anio}-${marker.mes}-${marker.dia}T${marker.finHora}:${marker.finMinuto}:00-0300`)
      if(marker.virtual == 'TRUE'){
        marker.calendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=PP+VL+-+Encuentro+VIRTUAL+${marker.barrio}&details=Te+invitamos+a+participar+colaborativamente+con+los+vecinos+de+${marker.barrio}+para+mejorar+nuestra+ciudad+juntos%0A%0ALink+de+la+reuni%C3%B3n+por+Zoom%3A+${encodeURIComponent(marker.linkLlamada)}&dates=${marker.fechaInicio.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}%2F${marker.fechaFin.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}`
      } else {
        marker.calendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=PP+VL+-+Encuentro+PRESENCIAL+${marker.barrio}&details=Te+invitamos+a+participar+colaborativamente+con+los+vecinos+de+${marker.barrio}+para+mejorar+nuestra+ciudad+juntos&location=${marker.direccion}&dates=${marker.fechaInicio.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}%2F${marker.fechaFin.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}`
      }
      output.push(marker)
    })
    output.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.fechaInicio) - new Date(b.fechaInicio);
    });
    output.forEach( event => {
      if(this.state.now < event.fechaFin) {
        available.push(event)
        availableId.push(event.id)
      } else {
        unavailableEvents.push(event)
      }
    })
    let currentEvent = available.find(event => {
      const starts = event.fechaInicio
      const ends = event.fechaFin
      const now = new Date()
      if (now > starts && now < ends) {
        return event
      }
    })
    this.setState({ events: output, availableEvents: available, availableEventsId: availableId, unavailableEvents: unavailableEvents, isLoading: false, currentEvent: currentEvent })
  }

  render () {
    const { events, isLoading, availableEvents, availableEventsId, unavailableEvents, currentEvent } = this.state
    return (
      <div>
        <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Encuentros 2022</h1>
            </div>
          </div>
        </section>
        <div id='container' className="events-page">
          <div className='ext-herramientas'>
            <div className="text-center">
              <h3 className="color-black">Calendario de reuniones</h3>
              <p>Inscribite en la reunión de tu barrio y presentá propuestas para mejorarlo.</p>
            </div> 
             <div className='action-btns'>
              {
                <div className='btns-descargas'>
                  <a className='boton-azul' href='https://docs.google.com/forms/d/e/1FAIpQLSfwI-HQ7dRweIRAG13PzqHorJ4TFookYqbV4RaslmPmM2ZodQ/viewform' target="_blank">
                      Quiero participar
                  </a>
                </div>
              }
            </div>
             {
              currentEvent && currentEvent.virtual == 'TRUE' && (
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="panel panel-primary happening-now">
                      <div className="panel-heading">
                        <h3 className="panel-title">¡AHORA! REUNIÓN VIRTUAL - {currentEvent.barrio}</h3>
                      </div>
                      <div className="panel-body">
                        <div className="flex-elements">
                          <div><b>¡AHORA MISMO!</b><br/>
                          <span style={{'fontSize': '22px'}}><b>{currentEvent.barrio}</b></span><br/>
                          <span><i>{currentEvent.fechaDiaLegible} - {currentEvent.inicioHora}:{currentEvent.inicioMinuto} Hs</i></span><br/>
                            Para acceder a la reunión haz clic en el botón <i className="glyphicon glyphicon-arrow-right"></i></div>
                          <a href={currentEvent.linkLlamada} target="_blank" className="btn btn-primary"><i className="glyphicon glyphicon-facetime-video"></i>&nbsp;&nbsp;Ingresar a la reunión</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
              <div className="text-center">
              <h3 className="color-primary">Proximos encuentros</h3>
              {
                isLoading 
                ? <p>Cargando...</p> 
                : <div>
                  {
                    availableEvents.map( event => <div className="event-container">
                      <div className="event-description">
                        <h5>{event.barrio}</h5>
                        <p><b>{event.fechaDiaLegible} - {event.fechaHoraLegible}</b></p>
                        <p>{event.virtual == 'TRUE' ? <span style={{fontWeight: 'bold', color: '#348bd8', fontSize: '16px'}}><span className="glyphicon glyphicon-facetime-video"></span>&nbsp;¡EVENTO VIRTUAL!</span> : `Dirección: ${event.direccion}` } </p>
                        {
                          event.virtual == 'TRUE' && (
                            <p><a href={event.linkLlamada} target="_blank"><i className="glyphicon glyphicon-link"></i>&nbsp;&nbsp;<u>Hacé clic aquí</u></a> para ir al Zoom de la reunión</p>
                          )
                        }
                        <p>{event.descripcion}</p>
                      </div> 
                      <div className="event-actions">
                        { event.cupoLleno == 'FALSE' ? 
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwI-HQ7dRweIRAG13PzqHorJ4TFookYqbV4RaslmPmM2ZodQ/viewform" className="btn btn-primary btn-inscripcion" target="_blank" >Inscribite!</a>
                          : <div className="btn btn-danger btn-inscripcion" disabled>¡CUPO LLENO!</div>
                        }
                        { event.cupoLleno == 'FALSE' ? 
                          <a href={event.calendarURL} className="btn btn-default btn-sm" target="_blank" disabled={event.cupoLleno == 'FALSE' ? false : true} ><span className="glyphicon glyphicon-calendar"></span> <span className="glyphicon glyphicon-plus"></span> Google Calendar</a>
                          : <div className="btn btn-default btn-sm" disabled><span className="glyphicon glyphicon-calendar"></span> <span className="glyphicon glyphicon-plus"></span> Google Calendar</div>
                        }
                      </div>
                      </div> )
                  }
                  <br/>
                <hr />
                  <br/>
                <h3>Encuentros pasados</h3>
                {
                    unavailableEvents.map( event => <div className="event-container disabled">
                      <div className="event-description">
                        <h5>{event.barrio}</h5>
                        <p>{event.virtual == 'TRUE' ? <span><span className="glyphicon glyphicon-facetime-video"></span>&nbsp;¡EVENTO VIRTUAL!</span> : `Dirección: ${event.direccion}` } </p>
                        <p><b>{event.fechaDiaLegible}</b></p>
                        <p>{event.fechaHoraLegible}</p>
                      </div> 
                      </div> )
                  }
                </div>
              }
            </div> 
          </div>
        </div>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    )
  }
}
