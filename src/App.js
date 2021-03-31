import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.sub}
      </article>
    );
  }
}

class TOC extends Component {
  render() {
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
    </nav>
    );
  }
}

class App extends Component {
   render() {
     return (
       <div className="App">
         Hello, React!!
         <Subject title="WEB" sub="world wid web!"></Subject>
         <Subject title="React" sub="For UI"></Subject>
         <TOC></TOC>
         <Content title="HTML" sub="HTML is HyperText Markup Language 5"></Content>
       </div>
     );
   }
}

export default App;
