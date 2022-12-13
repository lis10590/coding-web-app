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

  const onClickButton = (id, title) => {
    codeBlockId = id;
    setRoom(title);
    navigate(`/codeBlocks/${id}`);
    socket.emit("join_room", room);
    dispatch(socketActions.editSocket(socket));
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
