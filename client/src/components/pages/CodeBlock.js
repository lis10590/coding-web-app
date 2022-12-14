import Editor from "../Editor";
import { Columns, Column, Box, Title } from "react-bulma-companion";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCodeBlocks, selectAllCodeBlocks } from "../../store/codeBlocks";
import { useParams } from "react-router-dom";

const CodeBlock = () => {
  const dispatch = useDispatch();
  let { codeBlockId } = useParams();
  const codeBlocks = useSelector(selectAllCodeBlocks);
  const socket = useSelector((state) => state.socket.socket);

  let [codeBlock] = codeBlocks.filter(
    (codeBlock) => codeBlockId === codeBlock._id
  );
  const [code, setCode] = useState("");
  useEffect(() => {
    dispatch(getAllCodeBlocks());
    // socket.on("receive_message", (data) => {
    //   console.log(data);
    //   setCode(data.message);
    // });
  }, [dispatch]);

  return (
    <Columns className="mt-6">
      <Column>
        <Box>
          <Title>{codeBlock ? codeBlock.title : null}</Title>
          <p>{codeBlock ? codeBlock.codeBlock.assignment : null}</p>
          <p>Example: {codeBlock ? codeBlock.codeBlock.example : null}</p>
          {codeBlock ? codeBlock.codeBlock.explanation : null}
        </Box>
      </Column>
      <Column>
        <Editor />
      </Column>
    </Columns>
  );
};

export default CodeBlock;
