function WaveformPicker() {
    return (
      <div className="waveformPicker" data-testid="wf-picker">
        <div className="right">
          <span>Current waveform: </span>
          <select name="waveform">
            <option value="sine">Sine</option>
            <option value="square" selected>
              Square
            </option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>
    );
}

export default WaveformPicker;