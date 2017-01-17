import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import socialLinks from '../data/social.json'
import projectLinks from '../data/projects.json'
import style from '../css/main.css'

class Index extends React.Component {
  renderProjectLinks() {
    return (
      <ul>
        {projectLinks.map(link => {
          return (
            <li key={link.url}>
              <a href={link.url}>{link.name}</a><br/>
              <small>{link.year}</small>
            </li>
          )
        })}
      </ul>
    )
  }

  renderSocialLinks() {
    return (
      <ul>
        {socialLinks.map(link => {
          return (
            <li key={link.url}><a href={link.url}>{link.text}</a></li>
          )
        })}
      </ul>
    )
  }

  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": config.siteDescription},
            {"name": "keywords", "content": config.siteKeywords},
          ]}
        />
        <h1>
          Hello, my name is Laszlo
        </h1>
        <p>I'm a full stack developer and I build things <em>(mostly)</em> for the web.</p>
        <h2>Some projects from the past:</h2>
        {this.renderProjectLinks()}
        <h2>You can find me on:</h2>
        {this.renderSocialLinks()}
        <h2>Contact me:</h2>
        <p>
          You want to work with me or just say hi? Shoot me an <a href="mailto:hello@laszlotamas.com">email</a>.
        </p >
        <footer>
          <p><small>Made (temporarily) with ❤ in <a href="https://de.wikipedia.org/wiki/Tirol">Tirol</a> using <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> hosted on <a href="https://github.com">Github</a>.</small></p>
        </footer>
      </div>
    )
  }
}

export default Index;
