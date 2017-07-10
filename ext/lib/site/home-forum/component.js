import React from 'react'
import { Link } from 'react-router'
import urlBuilder from 'lib/url-builder'
import { HomeForum } from 'lib/site/home-forum/component'
import BannerProyectos from 'ext/lib/site/banner-proyectos/component'
import BarriosBotones from 'ext/lib/site/barrios-botones/component'

export default class HomeForumExt extends HomeForum {
  render () {
    const { forum, topics } = this.state

    if (!forum) return null

    return (

      <div className='ext-home-forum'>
        <BannerProyectos />
        <BarriosBotones />
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-3'>Custom Homepage</h1>
            <p className='lead'>This is your customized homepage, located at <strong>/ext/lib/site/home-forum/component.js</strong></p>
            <p className='lead'>If yout want to edit the CSS, the file is: <strong>/ext/lib/site/home-forum/styles.styl</strong></p>
          </div>
        </div>
        {topics.length === 0 && (
          <div className='ext-forum-home-empty'>
            <p>You dont have any Topic yet, do it here:</p>
            <Link
              className='btn btn-primary'
              to={urlBuilder.for('admin.topics.create', { forum: forum.name })}>
              Create my first Topic
            </Link>
          </div>
        )}
        {topics.length > 0 && (
          <div className='container'>
            <p>topics:</p>
            <ul>
              {topics.map((topic) => (
                <li>
                  <Link to={topic.url}>
                    {topic.mediaTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    )
  }
}
