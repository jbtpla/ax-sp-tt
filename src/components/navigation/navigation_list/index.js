import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export default class NavigationList extends PureComponent {
  render () {
    return (
      <div className='navigation-list-container'>
        <div>
        <div className='navigation-list-heading'>Name</div>
        <div className='navigation-list-heading'>Year</div>
        <div className='navigation-list-heading'>Country</div>
        <div className='navigation-list-heading'>Cuisine</div>
        <div className='navigation-list-heading'>Cost</div>
      </div>
        {this.props.data.map((location, index) => {
          return (
            <div className='navigation-list-item' key={location.name} onClick={() => this.props.handleListItemPress(index)}>
              <span>{location.name}</span>
              <span>{location.yearDiscovered}</span>
              <span>{location.country}</span>
              <span>{location.cuisine}</span>
              <span>{location.cost}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

NavigationList.propTypes = {
  handleListItemPress: PropTypes.func,
  data: PropTypes.array
}
