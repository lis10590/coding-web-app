import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";

const Editor = () => {
  return (
    <div>
      <CodeMirror
        height="20rem"
        width="40rem" /*extensions={[javascript({ jsx: true })]}*/
      />
    </div>
  );
};

export default Editor;
