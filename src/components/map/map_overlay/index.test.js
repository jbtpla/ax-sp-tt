import {render, screen, fireEvent } from '@testing-library/react'
import MapOverlay from './index'

test('renders all properties', () => {
  const testObject = {
    yearDiscovered: 1999,
    lng: 1,
    lat: 1,
    name: 'RR Diner',
    cost: '*'
  }
  render(
    <MapOverlay
      yearDiscovered={testObject.yearDiscovered}
      name={testObject.name}
      cost={testObject.cost}
      lng={testObject.lng}
      lat={testObject.lat}
    />
  );
  const regYear = new RegExp(`Year Discovered: ${testObject.yearDiscovered}`, 'i')
  const regName = new RegExp(`Name: ${testObject.name}`, 'i')
  const regCost = new RegExp(`Cost: \*`, 'i')
  const regLat = new RegExp(`Lat: ${testObject.lat}`, 'i')
  const regLng = new RegExp(`Lng: ${testObject.lng}`, 'i')

  expect(screen.getByText(regYear)).toBeTruthy()
  expect(screen.getByText(regName)).toBeTruthy()
  expect(screen.getByText(regCost)).toBeTruthy()
  expect(screen.getByText(regLat)).toBeTruthy()
  expect(screen.getByText(regLng)).toBeTruthy()
});
