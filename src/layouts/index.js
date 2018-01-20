import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import banf from './banf.jpg'; // Tell Webpack this JS file uses this image

import './index.css'

import {Left} from '../components/left';
import {Right} from '../components/right';

import {Icon} from 'react-fa'



const Header = () => (
  <div
    style={{
      borderBottom: '1px solid black',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Left>
        <h1 style={{ margin: 0 }}>
        Calgary Classes
        </h1>
        <div id="left-small">
        Independent Educational Resources in Calgary
        </div>
      </Left>
      <Right>
      <br />
        <a href="#add-class"><button type="button" style={{backgroundColor: 'unset'}}><Icon name="plus" /> Add Class</button></a>

      </Right>
    </div>
  </div>
)

const MyLinks = () => (
  <div id="add-class"
    style={{
      borderTop: '1px solid black',
    }}
  >
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
      width: '100%',
      height: '100px'
    }}
  >

    <div style={{margin: 'auto'}}>
      If you would like to add a class email hassan.shaikley@gmail.com with the title, location, time, price and optionally the website. If the price is negotiable please let us know as well.
    </div>
	</div>
  </div>

)


const Footer = () => (
  <div
    style={{
      background: 'lavender',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
				color: 'rgba(0,0,0,.8)',
      }}
    >

    </div>
  </div>
)

const PreFooter =() => (
	<div>
		<img style={{marginBottom: '0px', margin: 'auto', display: 'block', width: '100%'}} src={banf} alt="A picture of me drinking coffee at Banff National Park." />
		</div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Calgary Classes"
      meta={[
        { name: 'description', content: 'A list of independent and drop in classes in Calgary, AB.' },
        { name: 'keywords', content: 'Calgary Classes, Hassan Shaikley, Calgary Free Classes' },
      ]}
    />
    <Header />
      {children()}
		<MyLinks />

{		//<Footer />
}  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
