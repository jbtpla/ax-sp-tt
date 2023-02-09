import { sortArrayByProperty } from './helpers'
import { LOCATION_PROPERTIES } from './constants'

const testData = [
  {
    name: 'A Restaurant',
    yearDiscovered: 2019,
    lng: 10.1,
    lat: 10.1,
    country: 'UK',
    cost: '***',
    cuisine: 'British'
  },
  {
    name: 'BBB',
    yearDiscovered: 2016,
    lng: 12.1,
    lat: 10.1,
    country: 'ES',
    cost: '*****',
    cuisine: 'Thai'
  },
  {
    name: 'CCCCCC',
    yearDiscovered: 2017,
    lng: 13.1,
    lat: 10.1,
    country: 'JP',
    cost: '**',
    cuisine: 'Teppanyaki'
  }
]

test('returns the correct sequence of objects when sorting by NAME', () => {
  const expected = testData.sort((a, b) => a.name - b.name)
  const result = sortArrayByProperty(testData, LOCATION_PROPERTIES.NAME)

  expect(result).toEqual(expected)
})

test('returns the correct sequence of objects when sorting by YEAR_DISCOVERED', () => {
  const expected = testData.sort((a, b) => a.yearDiscovered - b.yearDiscovered)
  const result = sortArrayByProperty(testData, LOCATION_PROPERTIES.YEAR_DISCOVERED)

  expect(result).toEqual(expected)
})

test('returns the correct sequence of objects when sorting by CUISINE', () => {
  const expected = testData.sort((a, b) => a.cuisine - b.cuisine)
  const result = sortArrayByProperty(testData, LOCATION_PROPERTIES.CUISINE)

  expect(result).toEqual(expected)
})

test('returns the correct sequence of objects when sorting by COUNTRY', () => {
  const expected = testData.sort((a, b) => a.country - b.country)
  const result = sortArrayByProperty(testData, LOCATION_PROPERTIES.COUNTRY)

  expect(result).toEqual(expected)
})

test('returns the correct sequence of objects when sorting by COST', () => {
  const expected = testData.sort((a, b) => a.cost - b.cost)
  const result = sortArrayByProperty(testData, LOCATION_PROPERTIES.COST)

  expect(result).toEqual(expected)
})