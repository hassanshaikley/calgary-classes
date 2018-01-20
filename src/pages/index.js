import React from 'react'
import Link from 'gatsby-link'

import {Left} from '../components/left';
import {Right} from '../components/right';

const classes = require('./classes.json')
import { Class } from '../components/class'
const IndexPage = () => (
  <div
    style={{
      background: '#FEFEFF',
    }}
  >
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    }}
  >
    <Left>
  		<h1>Art</h1>
      <div id="left-small">
      </div>
    </Left>
    <Right>
		<ul>
    {
      classes.art.map(art_class => {
        return (
          <li key={`${art_class.title}-${art_class.location}`} style={{marginBottom: '25px'}}>
            <Class indy_class={art_class} />
          </li>
      )
      })
    }
		</ul>
    </Right>
    <Left>
      <h1>Computing</h1>
      <div id="left-small">
      </div>
    </Left>
    <Right>
    <ul>
    {
      classes.computing.map(computing_class => {
        return (
          <li key={`${computing_class.title}-${computing_class.location}`} style={{marginBottom: '25px'}}>
            <Class indy_class={computing_class} />
          </li>
      )
      })
    }
    </ul>
    </Right>
    </div>

  </div>
)

export default IndexPage
