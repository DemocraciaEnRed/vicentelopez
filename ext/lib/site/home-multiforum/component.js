import React from 'react'
import {Link} from 'react-router'
import config from 'lib/config'
import TweetsFeed from '../tweets-feed/component'
import videos from './videos.json'
import Footer from 'ext/lib/site/footer/component'
import BarriosBotones from 'ext/lib/site/barrios-botones/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'

export default function HomeMultiforumOverride (props) {
  const video = videos[Math.floor(Math.random() * videos.length)]

  return (
    <div className='ext-home-multiforum'>

      <div className='ext-home-cover' style={{
          backgroundImage: `url("${video.image}")`
        }}>
        {window.innerWidth >= 768 && (
          <div className='banner'>
            <div className='video'>
              <video
                playsInline
                autoPlay
                muted
                loop
                poster={video.image}
                id='bgvid'>
                <source src={video.video} type='video/mp4' />
              </video>
            </div>
          </div>
        )}
      </div>
      <BannerForoVecinal />
      <ThumbsVoto />
      <BarriosBotones />
      <Footer />

    </div>

  )
}
