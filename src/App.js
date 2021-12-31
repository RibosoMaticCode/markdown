import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import React, { Component } from 'react'
// la librería "Marked" para crear markdown
import { marked } from 'marked';

// cambiar salto de linea por <br>
marked.use({
  breaks: true,
});


const defaultText = `# # ¡Bienvenido a mi vista previa de React Markdown! -  Jesus Liñan 😊

## Este es un subtítulo ...
### Y aquí hay otras cosas interesantes:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends Component {
  constructor(props){
    super(props);

    // variables de estado
    this.state = {
      contentEditor: defaultText,
      contentPreview: marked.parse( defaultText )
    }

    // enlazando funcion a constructor
    this.preview = this.preview.bind(this)
  }

  // funcion de preview
  preview(event) {    
    this.setState({
      contentEditor: event.target.value,
      contentPreview: marked.parse(event.target.value) // haciendo uso de marked
    });  
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Editor contentEditor={this.state.contentEditor} onchange={this.preview} />
          </div>
          <div className='col-md-6'>
            <Preview contentPreview={this.state.contentPreview} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
