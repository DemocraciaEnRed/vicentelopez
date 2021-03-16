import React, {Component} from 'react'
import Footer from   'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import {Link} from 'react-router'
import PuntosDeVotacion from '../assets/puntos-de-votacion'

export default class Page extends Component {
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
    output.forEach( event => {
      if(this.state.now < event.fechaFin) {
        available.push(event)
        availableId.push(event.id)
      } else {
        unavailableEvents.push(event)
      }
    })
    this.setState({ events: output, availableEvents: available, availableEventsId: availableId, unavailableEvents: unavailableEvents, isLoading: false })
  }

  render () {
    const { events, isLoading, availableEvents, availableEventsId, unavailableEvents } = this.state
    return (
      <div>
        <section className="banner-static">
          <div className="banner"></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Encuentros virtuales 2021</h1>
            </div>
          </div>
        </section>
        <div id='container' className="events-page">
          <div className='ext-herramientas'>
            <div className="text-center">
              <h3 className="color-black">Calendario de reuniones</h3>
              <p>Inscribite en las reuniones de tu barrio y presentá propuestas para que mejoren el mismo. Este año, debido a la pandemia por el COVID-19, todas las reuniones se realizarán de forma virtual a través de Zoom</p>
            </div> 
             <div className='action-btns'>
              {
                <div className='btns-descargas'>
                  <a className='boton-azul' href='https://forms.gle/XAzf28UUFYj4T7tS8' target="_blank">
                      Quiero participar
                  </a>
                </div>
              }
            </div>
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
                        <p><b>{event.fechadialegible}</b></p>
                        <p>{event.fechahoralegible}</p>
                      </div> 
                      <div className="event-actions">
                        <a href="https://forms.gle/XAzf28UUFYj4T7tS8" className="btn btn-primary btn-inscripcion" target="_blank" >Inscribite!</a>
                        <a href={event.calendarURL} className="btn btn-default btn-sm" target="_blank" ><span className="glyphicon glyphicon-calendar"></span> <span className="glyphicon glyphicon-plus"></span> Google Calendar</a>
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
                        <p><b>{event.fechadialegible}</b></p>
                        <p>{event.fechahoralegible}</p>
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
