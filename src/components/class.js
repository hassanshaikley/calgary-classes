import React from 'react'
import PropTypes from 'prop-types'

export class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDiv: undefined
    }
  }

  activate() {
    // console.log('sup')
    // <img src={image} />

  }
  deactivate() {
    // console.log('suop')

  }
  render() {
    const {indy_class} = this.props;
    return(
      <div style={{color: 'rgba(0,0,0,.8)'}}
        onMouseEnter={this.activate}
        onMouseLeave={this.deactivate}
        >

        <h4>
          {indy_class.title}
        </h4>
        <h5>
          {indy_class.time}
        </h5>
        {indy_class.location} <br />
        {indy_class.price} ---
        {indy_class.price_negotiable && <small> Price is negotiable! </small>} <br />

        {indy_class.website && <a href={indy_class.website}>website</a>}



        <div style={{fontSize: '90%', lineHeight: 'normal',  marginTop: '7px'}}>{indy_class.description}</div>
      </div>
    )
  }
}
