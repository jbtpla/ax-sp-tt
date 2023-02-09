import {render, screen, fireEvent } from '@testing-library/react'
import NavigationList from './index'

const testData = [
  {
    name: 'A Restaurant',
    yearDiscovered: 2019,
    lng: 10.1,
    lat: 10.1,
    country: 'GB',
    cost: '***',
    cuisine: 'British'
  },
  {
    name: 'BBB',
    yearDiscovered: 2016,
    lng: 12.1,
    lat: 10.1,
    country: 'JP',
    cost: '*****',
    cuisine: 'Ramen'
  }
]

test('renders only certain properties/objects passed in', () => {
  render(<NavigationList data={testData} />);

  expect(screen.queryByText(`${testData[0].lng}`)).toBeNull()
  expect(screen.queryByText(`${testData[0].lat}`)).toBeNull()
  expect(screen.queryByText(`${testData[1].lng}`)).toBeNull()
  expect(screen.queryByText(`${testData[1].lat}`)).toBeNull()
  expect(screen.getByText(`${testData[0].name}`)).toBeTruthy()
  expect(screen.getByText(`${testData[0].yearDiscovered}`)).toBeTruthy()
  expect(screen.getByText(`${testData[0].country}`)).toBeTruthy()
  expect(screen.getByText(`${testData[0].cost}`)).toBeTruthy()
  expect(screen.getByText(`${testData[0].cuisine}`)).toBeTruthy()
  expect(screen.getByText(`${testData[1].name}`)).toBeTruthy()
  expect(screen.getByText(`${testData[1].yearDiscovered}`)).toBeTruthy()
  expect(screen.getByText(`${testData[1].country}`)).toBeTruthy()
  expect(screen.getByText(`${testData[1].cost}`)).toBeTruthy()
  expect(screen.getByText(`${testData[1].cuisine}`)).toBeTruthy()

});

test('fires callback on click for both buttons', () => {
  const handleListItemPress = jest.fn()
  render(<NavigationList handleListItemPress={handleListItemPress} data={testData} />);

  fireEvent.click(screen.getByText(`${testData[0].name}`))

  expect(handleListItemPress).toHaveBeenCalledTimes(1);
});