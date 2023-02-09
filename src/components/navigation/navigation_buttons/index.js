import React from 'react'
import PropTypes from 'prop-types'

const NavigationButtons = ({ previousDisabled, nextDisabled, handlePreviousButtonPress, handleNextButtonPress }) => {
  return (
    <div>
      <button disabled={previousDisabled} onClick={() => handlePreviousButtonPress()}>Previous</button>
      <button disabled={nextDisabled} onClick={() => handleNextButtonPress()}>Next</button>
    </div>
  )
}

export default NavigationButtons

NavigationButtons.propTypes = {
  previousDisabled: PropTypes.bool,
  nextDisabled: PropTypes.bool,
  handlePreviousButtonPress: PropTypes.func,
  handleNextButtonPress: PropTypes.func
}
