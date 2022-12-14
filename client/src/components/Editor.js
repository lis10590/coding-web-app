import CodeMirror from "@uiw/react-codemirror";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Editor = () => {
  const [code, setCode] = useState("");
  const socket = useSelector((state) => state.socket.socket);
  const room = useSelector((state) => state.socket.room);
  const socketIds = useSelector((state) => state.socket.socketIds);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setCode(data.code);
    });
  }, [socket]);

  const onChangeCode = (e) => {
    setCode(e);
    socket.emit("send_message", { code: e, room, id: socket.id });
  };
  return (
    <div>
      <CodeMirror
        height="20rem"
        width="40rem"
        onChange={onChangeCode}
        value={code}
        editable={socketIds && socketIds.length > 1 ? true : false}
      />
    </div>
  );
};

export default Editor;
