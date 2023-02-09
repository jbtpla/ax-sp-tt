import {render, screen, fireEvent } from '@testing-library/react'
import NavigationButtons from './index'

test('renders two buttons', () => {
  render(<NavigationButtons />);
  const nextButton = screen.getByText(/Next/i)
  const prevButton = screen.getByText(/Previous/i)

  expect(nextButton).toBeTruthy()
  expect(prevButton).toBeTruthy()
});

test('fires callback on click for both buttons', () => {
  const handleNextButtonPress = jest.fn()
  const handlePreviousButtonPress = jest.fn()
  render(<NavigationButtons handleNextButtonPress={handleNextButtonPress} handlePreviousButtonPress={handlePreviousButtonPress} />);

  fireEvent.click(screen.getByText(/Next/i))
  fireEvent.click(screen.getByText(/Previous/i))

  expect(handleNextButtonPress).toHaveBeenCalledTimes(1);
  expect(handlePreviousButtonPress).toHaveBeenCalledTimes(1);
});


test('disables buttons on value passed in, no callbacks', () => {
  const handleNextButtonPress = jest.fn()
  const handlePreviousButtonPress = jest.fn()
  render(
    <NavigationButtons
      handleNextButtonPress={handleNextButtonPress}
      handlePreviousButtonPress={handlePreviousButtonPress}
      previousDisabled={false}
      nextDisabled={true}
    />
  );
  const nextButton =  screen.getByText(/Next/i)
  const prevButton = screen.getByText(/Previous/i)

  fireEvent.click(screen.getByText(/Next/i))
  fireEvent.click(screen.getByText(/Previous/i))

  expect(handleNextButtonPress).not.toHaveBeenCalled();
  expect(handlePreviousButtonPress).toHaveBeenCalledTimes(1);
  expect(nextButton).toHaveAttribute('disabled')
  expect(prevButton).not.toHaveAttribute('disabled')
});
