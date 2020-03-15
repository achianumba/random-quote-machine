import React from 'react';

const NewQuoteButton = (props) => {
    return (
      <button 
        id="new-quote"
        onClick={ props.changeQuote }
        className={ props.newQuoteButtonStyle }
        >
      New quote
        </button>
    )
  }

  export default NewQuoteButton;