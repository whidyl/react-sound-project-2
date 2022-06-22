import { render, screen } from '@testing-library/react';
import App from './App';

test('Sound button on screen', () => {
  render(<App />);

  const linkElement = screen.getByTestId("play-sound-button");

  expect(linkElement).toBeInTheDocument();
});
