import React, { PureComponent } from 'react'
import './styles.css'
import PropTypes from 'prop-types'

export default class MapOverlay extends PureComponent {
  render () {
    return (
      <div className="map-overlay">
        <div> Name: {this.props.name} </div>
        <div> Year Discovered: {this.props.yearDiscovered} </div>
        <div> Cost: {this.props.cost} </div>
        <div> Lng: {this.props.lng} </div>
        <div> Lat: {this.props.lat} </div>
      </div>
    )
  }
}

MapOverlay.propTypes = {
  name: PropTypes.string,
  yearDiscovered: PropTypes.number,
  cost: PropTypes.string,
  lng: PropTypes.number,
  lat: PropTypes.number
}
