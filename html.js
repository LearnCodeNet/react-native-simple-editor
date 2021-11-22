const editorHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        html {
            height: 100%;
            width: 100%;
        }
        body {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            height: 100%;
            margin: 0;
        }
        #editor {
           flex-grow: 1;
        }
    </style>
</head>
<body>
  <div id="editor" contentEditable>
  </div>
  <script>
  (function(doc) {
    var editor = document.getElementById('editor');
    editor.contentEditable = true;

    var getRequest = function(event) {  
      switch (event.data) {
        case 'bold':
          document.execCommand('bold', false, '');
          break;
        case 'italic':
            document.execCommand('italic', false, '');
            break;
        case 'html':
              sendMessage(
                editor.innerHTML
                );
              break;
        default:
          break;
      }
    }

    var sendMessage = function(message) {
      if(window.ReactNativeWebView)
        window.ReactNativeWebView.postMessage(message);
    }


    document.addEventListener("message", getRequest , false);
    window.addEventListener("message", getRequest , false);

  })(document)
</script>
</body>
</html>
`;

export default editorHTML;