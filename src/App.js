import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './particles-config';
import {FaQuoteLeft, FaTwitter} from 'react-icons/fa';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quote: '',
      author: '',
      loading: true
    }
  }

tweetQuote = () => {
  const {quote, author} = this.state;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}
getQuote = () => {
    this.setState({loading: true});
      fetch("https://favqs.com/api/qotd", {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": 'Token token="a4cc0569a80b1af6eef203ef9e6be28b"'
      }
      })
      .then(res => res.json())
      .then(data => this.setState({quote: data.quote.body, author: data.quote.author, loading: false}))
      .catch(err => console.error(err));
};

componentDidMount() {
  this.getQuote();
};

  
  
  

  render(){
    const {quote, author, loading} = this.state;
    return(
      <div className="App">
        <Particles className='particles' params={particlesConfig} />
        { loading
          ? <div className='loader'></div>
          : <div className='quote-container'>
              <div className='quote-text'>
                <FaQuoteLeft style={{ paddingRight: '10px', fontSize: '4rem'}}/>
                  <span className='quote'>
                  {quote}
                  </span>
              </div>
              <div className='quote-author'>
                <span>{author}</span>
              </div>
              <div className='button-container'>
                <button className='twitter-button' title='Tweet This!' onClick={this.tweetQuote}>
                  <FaTwitter className='twitter-icon'/>
                </button>
                <button className='new-quote' onClick={this.getQuote}>New Quote</button>
      
              </div>
            </div>
        }
      </div>
    )
  }
}

export default App;
