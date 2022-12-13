import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";

const Editor = () => {
  const [code, setCode] = useState("");
  return (
    <div>
      <CodeMirror height="20rem" width="40rem" />
    </div>
  );
};

export default Editor;
