import { render, screen } from '@testing-library/react';
import App from './App';

describe('SynthApp', () => {
  it ("Renders keyboard", () => {
    render(<App />);

    const keyboard = screen.getByTestId("keyboard");

    expect(keyboard).toBeInTheDocument();
  })

  it ("Renders settings bar", () => {
    render(<App />);

    const settingsBar = screen.getByTestId("settings-bar");

    expect(settingsBar).toBeInTheDocument();
  })

  it ("Renders waveform picker", () => {
    render(<App />);

    const waveformPicker = screen.getByTestId("wf-picker");

    expect(waveformPicker).toBeInTheDocument();
  });
});
