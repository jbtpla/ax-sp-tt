import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import data from '../../data'
import PropTypes from 'prop-types'
import MapOverlay from './map_overlay'
import './styles.css'
import './mapbox-styles.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2V2MyIsImEiOiJjbGRuYzJodzEwY2Z1M3BvNHIydzN5ajBkIn0.2ChmMluYj9GRBvTGreA_-A'

const Map = ({ name, yearDiscovered, cost, lng = -70.9, lat = 42.35 }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 9
    })
    data.map((element, i) => addMarkerToMap(element))
  })

  const addMarkerToMap = (dataObject) => {
    const el = document.createElement('div')
    el.className = 'marker'
    new mapboxgl.Marker(el).setLngLat([dataObject.lng, dataObject.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h3>${dataObject.name}</h3><p>${dataObject.country}</p><p>Cuisine: ${dataObject.cuisine}</p>`
          )
      )
      .addTo(map.current)
  }

  useEffect(() => {
    map.current.flyTo({ center: [lng, lat] })
  }, [lng, lat])

  return (
    <div className='container'>
      <div ref={mapContainer} className='map-container'/>
      <MapOverlay name={name} yearDiscovered={yearDiscovered} cost={cost} lng={lng} lat={lat}/>
    </div>
  )
}

export default Map

Map.propTypes = {
  name: PropTypes.string,
  yearDiscovered: PropTypes.number,
  cost: PropTypes.string,
  lng: PropTypes.number,
  lat: PropTypes.number
}
