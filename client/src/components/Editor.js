import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { vscodeDark } from "@uiw/codemirror-themes-all";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, selectAllUsers } from "../store/users";
import { getAllTestCases, selectAllTestCases } from "../store/testCases";
import { Button } from "react-bulma-companion";

const Editor = (props) => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(props.initCode);
  const socket = useSelector((state) => state.socket.socket);
  const room = useSelector((state) => state.socket.room);
  const users = useSelector(selectAllUsers);
  const testCases = useSelector(selectAllTestCases);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllTestCases());
    socket.on(`receive_message_room_${room}`, (data) => {
      setCode(data.code);
    });
    socket.on("disconnect_user", (id) => {
      console.log(id);
    });
  }, [socket, dispatch]);

  const onChangeCode = (e) => {
    setCode(e);

    socket.emit("send_message", { code: e, room, id: socket.id });
  };

  const checkSocketId = () => {
    if (users && users.length !== undefined) {
      let currentUser = {};
      for (const user of users) {
        if (user.socketId === socket.id) {
          currentUser = user;
        }
      }

      if (currentUser.username === "student") {
        return true;
      } else {
        return false;
      }
    }
  };

  const onSubmitAnswer = () => {
    const codeString = code;
    const string1 = codeString.split("{")[1];
    const string2 = string1.split("}")[0];
    console.log(string2);
  };
  return (
    <div>
      <CodeMirror
        height="20rem"
        width="40rem"
        extensions={[langs.javascript()]}
        theme={vscodeDark}
        onChange={onChangeCode}
        value={code}
        // readOnly={checkSocketId() ? false : true} doesn't work after deployment
      />

      <Button className="mt-4" color="danger" onClick={onSubmitAnswer}>
        Submit Answer
      </Button>
    </div>
  );
};

export default Editor;
