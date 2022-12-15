import Editor from "../Editor";
import { Columns, Column, Box, Title, Button } from "react-bulma-companion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCodeBlocks, selectAllCodeBlocks } from "../../store/codeBlocks";
import { useParams, useNavigate } from "react-router-dom";
import { deleteOneUser } from "../../store/users";

const CodeBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { codeBlockId } = useParams();
  const codeBlocks = useSelector(selectAllCodeBlocks);
  const socket = useSelector((state) => state.socket.socket);

  let [codeBlock] = codeBlocks.filter(
    (codeBlock) => codeBlockId === codeBlock._id
  );

  useEffect(() => {
    dispatch(getAllCodeBlocks());
  }, [dispatch]);

  const onGoBackClick = () => {
    dispatch(deleteOneUser(socket.id));
    navigate("/");
  };

  return (
    <div>
      <Button color="primary" className="mt-6" onClick={onGoBackClick}>
        Go Back To Lobby
      </Button>
      <Columns className="mt-6">
        <Column>
          <Box>
            <Title>{codeBlock ? codeBlock.title : null}</Title>
            <p>{codeBlock ? codeBlock.codeBlock.assignment : null}</p>
            <p>Example: {codeBlock ? codeBlock.codeBlock.example : null}</p>
            <p>
              Explanation : {codeBlock ? codeBlock.codeBlock.explanation : null}
            </p>
          </Box>
        </Column>
        <Column>
          <Editor initCode={codeBlock ? codeBlock.codeBlock.function : null} />
        </Column>
      </Columns>
    </div>
  );
};

export default CodeBlock;
