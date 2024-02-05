import React from 'react';
import './App.css';
import marked from 'marked';
import DOMPurify from 'dompurify';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:  `# Heading 1
## Subheading (Heading 2)
[Link to FCC](https://www.freecodecamp.org)
Inline \`code\`
      
\`\`\`python
# Code Block
def hello_world():
  print("Hello, World!")
\`\`\`
      
- List Item 1
- List Item 2
      
> Blockquote text
      
![code camp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
      
**Bolded Text**`
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

    render() {
      const htmlOutput = marked(this.state.input, { breaks: true });
      const sanitizedHtml = DOMPurify.sanitize(htmlOutput);
      return (
        <div className='app-wrapper'>
            <div className='wrapper'>
                <div className='text'>Editor | You can type code in this.</div>
                <textarea id='editor' value={this.state.input}  onChange={this.handleChange.bind(this)}></textarea>
            </div>
            <div className='wrapper'>
            <div className='text'>Preview | Your marked up code will preview in this.</div>
              <div id='preview'  dangerouslySetInnerHTML={{ __html: sanitizedHtml }}/>
            </div>
        </div>
      )
    }
}

export default App;
