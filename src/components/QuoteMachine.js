import React, { Component } from "react";
import Wrapper from "./Wrapper";
import { quotes, initialQuote } from "./quotes";
import NewQuoteButton from "./NewQuoteButton";
import './quote-machine.scss';

class QuoteMachine extends Component {
  constructor(props) {
    super(props);

    //Set the initial quote and it's author as properties of the app's state
    this.state = {
      quote: this.props.quote,
      author: this.props.author
    };

    this.changeQuote = this.changeQuote.bind(this);
  }

  //Set the initialQuote object's properties as the corresponding default props of QuoteMachine component.
  static defaultProps = {
    quote: initialQuote.quote,
    author: initialQuote.author
  };

  //Retrieve a random quote from quotes db. Yeah, yeah. I know it's not a real db -i'll fix that soon. jQuery.ajax() should work, no?
  changeQuote() {
    //retrieve a random quote from quotes db
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];

    //Check if the newQuote is the same as the current quote. If it's not, set QuoteMachine's state's properties to the corresponding properties in newQuote. If the previous quote is ame as the new quote, call changeQuote method of QuoteMachine again to generate a different quote. Yup, that's recursion baby!
    if (newQuote.quote !== this.state.quote) {
      this.setState(state => ({
        quote: newQuote.quote,
        author: newQuote.author
      }));
    } else {
      this.changeQuote();
    }
  }

  componentDidMount() {
      const fccTest = document.createElement('script');
      fccTest.src = `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`;
      document.head.append(fccTest);
  }

  render() {
    return (
      <Wrapper>
        <blockquote className="blockquote">
          <p id="text" className="mb-0 text-light">
            {this.state.quote}
          </p>
          <footer
            id="author"
            className="blockquote-footer text-white-50 text-center"
          >
            {this.state.author}
          </footer>
        </blockquote>

        <div className="d-flex flex-wrap justify-content-between">
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            Tweet quote{" "}
            {/* To be replaced with an svg icon. Wait, why am i telling you my plans? */}
          </a>
          <NewQuoteButton
            changeQuote={this.changeQuote}
            newQuoteButtonStyle="btn btn-warning btn-sm"
          />
        </div>
      </Wrapper>
    );
  }
}

export default QuoteMachine;
