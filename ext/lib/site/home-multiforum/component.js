import React from 'react'
import {Link} from 'react-router'
import config from 'lib/config'
import TweetsFeed from '../tweets-feed/component'
import videos from './videos.json'
import Footer from 'ext/lib/site/footer/component'
import Barrios from 'ext/lib/site/barrios/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import Carrusel from 'ext/lib/site/carrusel/component'

export default function HomeMultiforumOverride (props) {
  const video = videos[Math.floor(Math.random() * videos.length)]

  return (
    <div className='ext-home-multiforum'>


      <BannerForoVecinal />
      <ThumbsVoto />
      <Carrusel />
      <Barrios />
      <Footer />

    </div>

  )
}
