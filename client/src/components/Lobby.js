import { Title, Buttons, Button } from "react-bulma-companion";
import { useNavigate } from "react-router-dom";
const Lobby = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Title>Lobby Page</Title>
      <Title size="5">Choose a Code Block</Title>
      <Buttons className="is-justify-content-center">
        <Button color="primary" onClick={() => navigate("/goodpairs")}>
          Number of Good Pairs
        </Button>
        <Button color="info" onClick={() => navigate("/maxwords")}>
          Maximum Number of Words
        </Button>
        <Button color="danger" onClick={() => navigate("/sortpeople")}>
          Sort the People
        </Button>
        <Button color="warning" onClick={() => navigate("/palindrome")}>
          Find First Palindromic String
        </Button>
      </Buttons>
    </div>
  );
};

export default Lobby;
