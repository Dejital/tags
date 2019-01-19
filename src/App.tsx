import React, { Component } from 'react';
import './App.css';

const tags = [
  "foo", "bar", "foobar"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Instagram Tag Generator</h1>
        <TagGenerator />
        <footer>
          <a href="http://snevsky.com">
            <p>App by Serge Nevsky</p>
          </a>
        </footer>
      </div>
    );
  }
}

class TagGenerator extends Component {
  state = {
    output: ""
  }
  componentDidMount = () => this.setRandomTags();
  render() {
    return (
      <div>
        <button onClick={this.setRandomTags.bind(this)}>Generate</button>
        <br />
        <br />
        <textarea value={this.state.output} />
      </div>
    );
  }
  private setRandomTags = () => this.setState({ output: getRandomTags() });
}

function getRandomTags()
{
  return ".\n.\n.\n.\n.\n#foo #bar #foobar";
}

export default App;
