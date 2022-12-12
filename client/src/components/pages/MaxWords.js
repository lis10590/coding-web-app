import Editor from "../Editor";
import { Columns, Column, Box, Title } from "react-bulma-companion";

const MaxWords = () => {
  return (
    <Columns className="mt-6">
      <Column>
        <Box>
          <Title>Maximum Number of Words Found in Sentences</Title>
          <p>
            {" "}
            A sentence is a list of words that are separated by a single space
            with no leading or trailing spaces.
          </p>
          <p>
            You are given an array of strings sentences, where each sentences[i]
            represents a single sentence.
          </p>
          <p>
            Return the maximum number of words that appear in a single sentence.
          </p>
          <p>
            Example: Input: sentences = ["alice and bob love leetcode", "i think
            so too", "this is great thanks very much"] Output: 6
          </p>
          <p>
            Explanation: - The first sentence, "alice and bob love leetcode",
            has 5 words in total. - The second sentence, "i think so too", has 4
            words in total. - The third sentence, "this is great thanks very
            much", has 6 words in total. Thus, the maximum number of words in a
            single sentence comes from the third sentence, which has 6 words.
          </p>
        </Box>
      </Column>
      <Column>
        <Editor />
      </Column>
    </Columns>
  );
};

export default MaxWords;
