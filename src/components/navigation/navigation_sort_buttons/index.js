import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { LOCATION_PROPERTIES } from '../../../constants'

class NavigationSortButtons extends PureComponent {
  render () {
    const { handleChangeSortingClick } = this.props
    return (
      <div>
        <button onClick={() => handleChangeSortingClick(LOCATION_PROPERTIES.YEAR_DISCOVERED)}>Sort by Year</button>
        <button onClick={() => handleChangeSortingClick(LOCATION_PROPERTIES.NAME)}>Sort by Name</button>
        <button onClick={() => handleChangeSortingClick(LOCATION_PROPERTIES.COUNTRY)}>Sort by Country</button>
        <button onClick={() => handleChangeSortingClick(LOCATION_PROPERTIES.CUISINE)}>Sort by Cuisine</button>
      </div>
    )
  }
}

export default NavigationSortButtons

NavigationSortButtons.propTypes = {
  handleChangeSortingClick: PropTypes.func
}
