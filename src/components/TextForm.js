import React, { useState } from 'react';
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log('UpperCase was clicked' + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert('Converted to uppercase!', 'success');
  };

  const handleLoClick = () => {
    // console.log('LowerCase was clicked' + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert('Text Cleared!', 'success');
  };

  const handleCopyCLick = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to Clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed!', 'success');
  };

  const handleOnChange = event => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  // setText('new text');
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyCLick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Handle Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter(element => {
              return element.length !== 0;
            }).length
          }
          words and{' '}
          {
            text.split(/\s+/).filter(element => {
              return element.length !== 0;
            }).length
          }{' '}
          characters
        </p>
        <p>
          {0.008 *
            text.split(' ').filter(element => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}
