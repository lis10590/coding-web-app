import { Title, Buttons, Button } from "react-bulma-companion";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCodeBlocks, selectAllCodeBlocks } from "../store/codeBlocks";
import { socketActions } from "../store/socket";
import { getAllUsers, selectAllUsers, userAddition } from "../store/users";
import io from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_API_URL, {
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

  useEffect(() => {
    dispatch(getAllCodeBlocks());
    dispatch(getAllUsers());
  }, [dispatch]);

  const codeBlocks = useSelector(selectAllCodeBlocks);
  const users = useSelector(selectAllUsers);
  const connectedUsers = useSelector((state) => state.socket.numOfUsers);

  const onClickButton = (id, title) => {
    codeBlockId = id;

    dispatch(socketActions.editRoom(title));
    const data = {
      room: title,
      username: users.length > 1 ? "student" : "mentor",
      socketId: socket.id,
    };
    console.log(data.username);

    socket.emit("join_room", data);
    if (users) {
      const obj = {
        username: users.length !== 0 ? "student" : "mentor",
        socketId: socket.id,
      };
      dispatch(userAddition(obj));
    }

    dispatch(socketActions.editSocket(socket));
    dispatch(socketActions.editNumOfUsers());

    navigate(`/codeBlocks/${id}`);
  };

  return (
    <div>
      <Title className="mt-6">Lobby Page</Title>
      <Title size="5">Choose a Code Block</Title>
      <Buttons className="is-justify-content-center is-flex-direction-column">
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
