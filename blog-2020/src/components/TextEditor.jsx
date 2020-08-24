import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TextEditor extends Component {

  constructor(props) {
    super(props);

    this.state = { content: '' };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content, editor) {
    this.setState({ content });
  }

  render() {
    return (
      <Editor
        apiKey="mokw59jyuhvwgbpf4z5bvklv4b56e4x0m8wazfjv15qxtajr"
        initialValue="<p>Initial Content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
          'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        value={this.state.content}
        onEditorChange={this.handleEditorChange}
      />
    )
  }
}


export default TextEditor