import { Title, Buttons, Button } from "react-bulma-companion";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCodeBlocks, selectAllCodeBlocks } from "../store/codeBlocks";
import { socketActions } from "../store/socket";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001", {
  transports: ["websocket"],
  rejectUnauthorized: false,
});
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
const Lobby = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { codeBlockId } = useParams();
  const [room, setRoom] = useState("");

  useEffect(() => {
    dispatch(getAllCodeBlocks());
  }, [dispatch]);

  const codeBlocks = useSelector(selectAllCodeBlocks);
  const connectedUsers = useSelector((state) => state.socket.numOfUsers);

  const onClickButton = (id, title) => {
    codeBlockId = id;
    setRoom(title);
    dispatch(socketActions.editRoom(title));
    const data = {
      room: title,
      username: connectedUsers !== 0 ? "student" : "mentor",
      socketId: socket.id,
    };
    console.log(data.username);
    socket.emit("join_room", data);
    dispatch(socketActions.editSocket(socket));
    dispatch(socketActions.editNumOfUsers());
    dispatch(socketActions.editSocketId(socket.id));

    navigate(`/codeBlocks/${id}`);
  };

  return (
    <div>
      <Title>Lobby Page</Title>
      <Title size="5">Choose a Code Block</Title>
      <Buttons className="is-justify-content-center">
        {codeBlocks.map((codeBlock) => {
          return (
            <Button
              key={codeBlock._id}
              color="primary"
              onClick={() => onClickButton(codeBlock._id, codeBlock.title)}
            >
              {codeBlock.title}
            </Button>
          );
        })}
      </Buttons>
    </div>
  );
};

export default Lobby;
