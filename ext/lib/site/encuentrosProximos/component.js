import React, { Component } from 'react'
import { Link } from 'react-router'
import config from 'lib/config'
import forumStore from 'lib/stores/forum-store/forum-store'


export default class EncuentrosProximos extends Component {
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
      ],
      forum:null
    }
  }

  componentDidMount () {
    this.goTop()
    window.fetch(`https://sheets.googleapis.com/v4/spreadsheets/1p9RHiHfD7PpLYmEI0_ofCbk-2TYi7eqbm2ey5-UQ6Mw/values/Encuentros?key=${config.googleSheetApiKey}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        this.extractData(res)
      })
      .catch((err) => console.error(err))

      forumStore.findOneByName('proyectos').then((forum) => {
        this.setState({ forum })
    }).catch((err) => { console.error(err) })


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
      marker.calendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=PP+MGP+-+Encuentro+${marker.barrio}&details=Te+invitamos+a+participar+colaborativamente+con+los+vecinos+de+${marker.barrio}+para+mejorar+nuestra+ciudad+juntos&location=${marker.direccion}&dates=${marker.fechaInicio.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}%2F${marker.fechaFin.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}`
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
    const { isLoading, availableEvents, currentEvent,forum } = this.state
    return (
      <div className='seccion-proximos-encuentros'>
        <div className="text-center">
          <div className="fondo-titulo">
            <h3 className='subtitle'>REUNIONES INFORMATIVAS</h3>
          </div>
        </div>
        <div className="container">

        <div className="row text-center">
          <div className="col-lg-12">
          <p className="text-white">Inscribite en la reunión de tu barrio y presentá propuestas para mejorarlo.</p>
          </div>
        </div>
        <div className="row">
          <div className="btn-container">
           {forum && <a className='boton-azul boton-blanco text-center' href={forum.config.linkFormEncuentro} target="_blank">
              Quiero participar
            </a>}
          </div>
        </div>
            {
              currentEvent && currentEvent.virtual == 'TRUE' && (
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <div className="panel panel-warning happening-now">
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
        <div className="row ">
          <div className="eventos-container">
            <div className="the-label">
              <h5>PRÓXIMAS<br/>REUNIONES</h5>
              <Link href="/s/encuentros">
                Ver todos
              </Link>
            </div>
            { forum &&
              isLoading
              ? <div>
                  <p>Cargando...</p>
                </div>
              : (
                availableEvents.length > 0
                ? availableEvents.slice(0,3).map(event => 
                <div className="evento">
                  <div className="top">
                    <div className="poppi-left"></div>
                    <div className="poppi-right"></div>
                  </div>
                  <a href={forum.config.linkFormEncuentro} target="_blank">
                  <div className="bottom">
                    <h3>{event.barrio}</h3>
                    <h4>{event.fechaDiaLegible}<br/>{event.inicioHora}:{event.inicioMinuto} Hs</h4>
                    <p>
                      {
                        event.virtual == 'TRUE' && <span style={{fontWeight: 'bold', color: '#348bd8', fontSize: '14px'}}>¡EVENTO VIRTUAL!</span>
                      }
                      {event.direccion}<br/>{
                        event.cupoLleno == 'TRUE' && <span style={{fontWeight: 'bold', color: 'red', fontSize: '10px'}}>¡CUPO LLENO!</span>}
                    </p>
                  </div>
                  </a>
                </div>)
                : <p className="text-center">
                  No hay eventos disponibles
                </p>
              ) 
            }

          </div>
        </div>
        </div>
      </div>
    )
  }
}
