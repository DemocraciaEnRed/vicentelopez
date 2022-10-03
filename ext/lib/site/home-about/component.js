import React, { Component } from 'react'
// https://github.com/glennflanagan/react-responsive-accordion
import Accordion from 'react-responsive-accordion'

import aboutStore from 'lib/stores/about-store/about-store'
import Footer from 'ext/lib/site/footer/component'
import Jump from 'ext/lib/site/jump-button/component'
import Anchor from 'ext/lib/site/anchor'
import forumStore from 'lib/stores/forum-store/forum-store'

export default class HomeAbout extends Component {
  constructor () {
    super()

    this.state = {
      forum: null,
      faqs: null
    }
  }

  componentDidMount () {
    aboutStore
      .findAll()
      .then((faqs) => this.setState({ faqs }))
      .catch((err) => {
        throw err
      })
    const u = new window.URLSearchParams(window.location.search)
    if (u.get('scroll') === 'cronograma') return Anchor.goTo('cronograma')
    this.goTop()

    // traer forum al state
    forumStore
      .findOneByName('proyectos')
      .then((forum) => this.setState({ forum }))
      .catch((err) => {
        throw err
      })
  }

  goTop () {
    window.scrollTo(0, 0)
  }

  render () {
    const faqs = this.state.faqs

    return (
      <div>
        <section className='banner-static'>
          <div className='banner'></div>
          <div className='contenedor'>
            <div className='fondo-titulo'>
              <h1>Presupuesto Participativo</h1>
            </div>
          </div>
        </section>
        <div id='container'>
          <div className='ext-acerca-de container'>
            <div className='filas'>
              <div className='fila faq text-left'>
                {faqs && 
                  <Accordion startPosition={-1}>
                    {faqs.map((faq) => (
                      <div key={faq.id} data-trigger={`+ ${faq.question}`}>
                        <p className='p-padding' dangerouslySetInnerHTML={{ __html: faq.answer }} ></p>
                      </div>
                    ))}
                  </Accordion>
                }
              </div>

              <div className='fila no-bg hidden'>
                <Anchor id='mapa'>
                  <div className='map-box'>
                    <div className='mapa'>
                      <iframe
                        src='https://www.google.com/maps/d/u/0/embed?mid=1DEX8V6qaMQy-8NYKNPhsLH_xQnY&z=11&ll=-34.5174, -58.5026'
                        width='640'
                        height='480'
                      ></iframe>
                    </div>
                  </div>
                </Anchor>
                <Anchor id='cronograma'>
                  <div className='table-responsive'>
                    <h3>Cronograma de reuniones por barrio</h3>
                    <div>
                      El horario de las reuniones de presentación de propuestas
                      es de 19 a 21 hs
                    </div>
                    <table className='table tabla-reuniones'>
                      <tbody>
                        <tr>
                          <th>Olivos</th>
                          <th>Martes 20 de marzo</th>
                          <th>Colegio Virgen Del Carmen</th>
                          <th>Valle Grande 3141</th>
                        </tr>
                        <tr>
                          <td>Olivos</td>
                          <td>Jueves 22 de marzo</td>
                          <td>Colegio Asunción De La Virgen</td>
                          <td>Ugarte 2379</td>
                        </tr>
                        <tr>
                          <td>Olivos</td>
                          <td>Jueves 5 de abril</td>
                          <td>Escuela Primaria nº 2</td>
                          <td>Pelliza 1390</td>
                        </tr>
                        <tr>
                          <td>La Lucila</td>
                          <td>Martes 10 de abril</td>
                          <td>Jardín De Infantes nº 8</td>
                          <td>Díaz Vélez 1129</td>
                        </tr>
                        <tr>
                          <td>Munro</td>
                          <td>Jueves 12 de abril</td>
                          <td>Inst. De Ed. Integral De Munro</td>
                          <td>Carlos Tejedor 2761</td>
                        </tr>
                        <tr>
                          <td>Munro</td>
                          <td>Martes 17 de abril</td>
                          <td>Colegio María Auxiliadora</td>
                          <td>Panamá 3274</td>
                        </tr>
                        <tr>
                          <td>Vicente López</td>
                          <td>Jueves 19 de abril</td>
                          <td>Colegio Saint Gregory</td>
                          <td>Melo 948</td>
                        </tr>
                        <tr>
                          <td>Carapachay</td>
                          <td>Jueves 3 de Mayo</td>
                          <td>Escuela Secundaria nº 3</td>
                          <td>Drysale 5635</td>
                        </tr>
                        <tr>
                          <td>Florida Oeste</td>
                          <td>Martes 8 de mayo</td>
                          <td>Instituto Florentino Ameghino</td>
                          <td>C. De Alvear 1144</td>
                        </tr>
                        <tr>
                          <td>Villa Martelli</td>
                          <td>Jueves 10 de mayo</td>
                          <td>Instituto Fátima</td>
                          <td>Laprida 4075</td>
                        </tr>

                        <tr>
                          <td>Villa Adelina</td>
                          <td>Martes 15 de mayo</td>
                          <td>Avapea</td>
                          <td>Plaza Ader</td>
                        </tr>
                        <tr>
                          <td>Florida Este</td>
                          <td>Jueves 17 de mayo</td>
                          <td>Escuela Primaria nº 12</td>
                          <td>Haedo 2180</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Anchor>
              </div>
            </div>
          </div>
        </div>
        <Jump goTop={this.goTop} />
        <Footer />
      </div>
    );
  }
}
