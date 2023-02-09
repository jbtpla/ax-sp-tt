import React, { useEffect, useState } from 'react'
import { sortArrayByProperty } from '../../helpers'
import { LOCATION_PROPERTIES } from '../../constants'
import Map from '../../components/map'
import NavigationButtons from '../../components/navigation/navigation_buttons'
import NavigationList from '../../components/navigation/navigation_list'
import './styles.css'
import NavigationSortButtons from '../../components/navigation/navigation_sort_buttons'
import dataObject from '../../data'

const MapPage = () => {
  const [data, setData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousDisabled, setPreviousDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  useEffect(() => {
    const sortedData = sortArrayByProperty(dataObject, LOCATION_PROPERTIES.NAME)
    setData(sortedData)
  }, [])

  useEffect(() => {
    setPreviousDisabled(currentIndex === 0)
    setNextDisabled(data.length === currentIndex + 1)
  }, [currentIndex])

  const handlePreviousButtonPress = () => {
    setCurrentIndex(currentIndex - 1)
  }
  const handleNextButtonPress = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const handleListItemPress = (index) => {
    setCurrentIndex(index)
  }

  const changeSorting = (property) => {
    const sortedData = sortArrayByProperty(data, property)
    setData([...sortedData])
    setCurrentIndex(0)
  }
  return (
    <div className='navigation'>
      <NavigationSortButtons handleChangeSortingClick={changeSorting}/>
      <NavigationList data={data} handleListItemPress={handleListItemPress}/>
      <NavigationButtons
        previousDisabled={previousDisabled}
        nextDisabled={nextDisabled}
        handlePreviousButtonPress={handlePreviousButtonPress}
        handleNextButtonPress={handleNextButtonPress}
      />
      <Map {...data[currentIndex]} /* name={} yearDiscovered={} cost={} lng={} lat={}  */ />
    </div>
  )
}

export default MapPage
