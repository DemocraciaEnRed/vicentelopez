import React, { Component } from 'react'
import { Link } from 'react-router'

export default class EncuentrosProximos extends Component {
   constructor (props) {
    super(props)

    this.state = {
      now: new Date(),
      events: false,
      availableEvents: [],
      availableEventsId: [],
      unavailableEvents: [],
      isLoading: true,
      keys: [
        'id',
        'barrio',
        'dia',
        'mes',
        'anio',
        'iniciohora',
        'iniciominuto',
        'finhora',
        'finminuto',
        'fechadialegible',
        'fechahoralegible',
        'linkzoom'
      ]
    }
  }

  componentDidMount () {
    this.goTop()
    window.fetch(`https://spreadsheets.google.com/feeds/list/1p9RHiHfD7PpLYmEI0_ofCbk-2TYi7eqbm2ey5-UQ6Mw/1/public/full?alt=json`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
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
    let limit = 3
    data.feed.entry.forEach((entry) => {
      // eslint-disable-next-line prefer-const
      let marker = {}
      this.state.keys.forEach((key) => {
        marker[key] = entry[`gsx$${key}`].$t !== '' ? entry[`gsx$${key}`].$t : null
      })
      console.log(`${marker.anio}-${marker.mes}-${marker.dia}T${marker.iniciohora}:${marker.iniciominuto}:00-0300`)
      marker.fechaInicio = new Date(`${marker.anio}-${marker.mes}-${marker.dia}T${marker.iniciohora}:${marker.iniciominuto}:00-0300`)
      marker.fechaFin = new Date(`${marker.anio}-${marker.mes}-${marker.dia}T${marker.finhora}:${marker.finminuto}:00-0300`)
      marker.calendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=Encuentro+${marker.barrio}+-+PP+Vicente+Lopez+2021&details=Inscribite+en+las+reuniones+de+tu+barrio+y+present%C3%A1+propuestas+para+que+mejoren+el+mismo.+Este+a%C3%B1o%2C+debido+a+la+pandemia+por+el+COVID-19%2C+todas+las+reuniones+se+realizar%C3%A1n+de+forma+virtual+a+trav%C3%A9s+de+Zoom&dates=${marker.fechaInicio.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}%2F${marker.fechaFin.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.000','')}`
      output.push(marker)
    })
    output.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });
    let count = 0;
    output.forEach( event => {
      if(this.state.now < event.fechaFin && count < limit) {
        count++
        available.push(event)
        availableId.push(event.id)
      } else {
        // unavailableEvents.push(event)
      }
    })
    this.setState({ events: output, availableEvents: available, availableEventsId: availableId, isLoading: false })
  }


  render () {
    const { isLoading, availableEvents } = this.state
    return (
      <div className='seccion-proximos-encuentros container-fluid'>
        <div className="text-center">
          <div className="fondo-titulo">
            <h2 className='title'>ENCUENTROS VIRTUALES 2021</h2>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <p className="text-white">Inscribite a la reunión de tu barrio y presentá propuestas para que mejoren el mismo. Este año, debido a la pandemia por el COVID19, todas las reuniones se realizarán de froma virtual a través de Zoom.  </p>
          </div>
          <div className="row">
            <a className='boton-azul text-center' href='https://forms.gle/XAzf28UUFYj4T7tS8' target="_blank">
              QUIERO PARTICIPAR
            </a>
          </div>
          <div className="row ">
            <div className="eventos-container">
              <div className="the-label">
                <h5><span className="glyphicon glyphicon-facetime-video"></span> PRÓXIMAS<br/>REUNIONES</h5>
                <Link href="/s/encuentros">
                  Ver todos
                </Link>
              </div>
              {
                isLoading
                ? <div>
                    <p>Cargando...</p>
                  </div>
                : (
                  availableEvents.length > 0
                  ? availableEvents.map(event => 
                  <div className="evento">
                    <div className="top">
                      <div className="poppi-left"></div>
                      <div className="poppi-right"></div>
                    </div>
                    <div className="bottom">
                      <h5>{event.dia}/{event.mes}</h5>
                      <p><b>{event.barrio}</b><br/>{event.iniciohora} a {event.finhora} Hrs</p>
                    </div>
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
