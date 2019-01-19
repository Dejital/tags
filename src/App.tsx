import React, { Component } from 'react';
import './App.css';
import shuffle from "shuffle-array";
import tags from "./tags";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Instagram Tag Generator</h1>
        <TagGenerator tags={tags} />
        <footer>
          <a href="http://snevsky.com">
            <p>App by Serge Nevsky</p>
          </a>
        </footer>
      </div>
    );
  }
}

interface TagGeneratorProps {
  tags: Array<string>
}

class TagGenerator extends Component<TagGeneratorProps> {
  state = {
    output: "",
    numTags: 30
  }
  componentDidMount = () => this.setRandomTags();
  render() {
    const inputError = this.state.numTags > 30 || this.state.numTags <= 0;
    return (
      <div>
        <label htmlFor="numOfTagsToGenerate">Number of tags to generate:</label>
        <input className={inputError ? "error" : ""} onChange={this.onNumTagsChange.bind(this)} id="numOfTagsToGenerate" type="number" value={this.state.numTags} />
        <button onClick={this.setRandomTags.bind(this)}>Generate</button>
        <textarea value={this.state.output} onClick={this.textareaOnClick.bind(this)} />
      </div>
    );
  }
  private setRandomTags = () => 
    this.setState({ output: getRandomTags(this.props.tags, this.state.numTags) });
  private onNumTagsChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ numTags: e.currentTarget.value });
  }
  private textareaOnClick(e: React.FormEvent<HTMLTextAreaElement>) {
    e.currentTarget.select();
    document.execCommand("copy");
  }
}

function getRandomTags(tags: Array<string>, count: number): string
{
  //const randomTags = shuffle.pick(tags, { "picks": count });
  const randomTags = shuffle(tags);
  if (randomTags.length > 0) {
    const slice = Math.min(randomTags.length, count);
    let string = ".\n.\n.\n.\n.\n";
    for (let tag of randomTags.slice(0, slice)) {
      string += `#${tag} `;
    }
    return string;
  }
  return "";
}

export default App;
