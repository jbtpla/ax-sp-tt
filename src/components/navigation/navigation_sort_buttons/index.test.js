import {render, screen, fireEvent } from '@testing-library/react'
import NavigationSortButtons from './index'
import {LOCATION_PROPERTIES} from '../../../constants'

test('renders four buttons', () => {
  render(<NavigationSortButtons />);
  const nameSortButton = screen.getByText(/Sort by Name/i)
  const yearSortButton = screen.getByText(/Sort by Year/i)
  const countrySortButton = screen.getByText(/Sort by Country/i)
  const cuisineSortButton = screen.getByText(/Sort by Cuisine/i)

  expect(nameSortButton).toBeTruthy()
  expect(yearSortButton).toBeTruthy()
  expect(countrySortButton).toBeTruthy()
  expect(cuisineSortButton).toBeTruthy()
});

test('fires callback on click for all buttons', () => {
  const handleChangeSortingClick = jest.fn()
  render(<NavigationSortButtons handleChangeSortingClick={handleChangeSortingClick} />);

  fireEvent.click(screen.getByText(/Sort by Name/i))
  expect(handleChangeSortingClick).toHaveBeenCalledWith(LOCATION_PROPERTIES.NAME);
  fireEvent.click(screen.getByText(/Sort by Year/i))
  expect(handleChangeSortingClick).toHaveBeenCalledWith(LOCATION_PROPERTIES.YEAR_DISCOVERED);
  fireEvent.click(screen.getByText(/Sort by Country/i))
  expect(handleChangeSortingClick).toHaveBeenCalledWith(LOCATION_PROPERTIES.COUNTRY);
  fireEvent.click(screen.getByText(/Sort by Cuisine/i))
  expect(handleChangeSortingClick).toHaveBeenCalledWith(LOCATION_PROPERTIES.CUISINE);
  expect(handleChangeSortingClick).toHaveBeenCalledTimes(4);
});
