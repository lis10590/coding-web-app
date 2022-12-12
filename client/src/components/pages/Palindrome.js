import Editor from "../Editor";
import { Columns, Column, Box, Title } from "react-bulma-companion";

const Palindrome = () => {
  return (
    <Columns className="mt-6">
      <Column>
        <Box>
          <Title>Find First Palindromic String in the Array</Title>
          <p>
            Given an array of strings words, return the first palindromic string
            in the array. If there is no such string, return an empty string "".
          </p>
          <p>
            A string is palindromic if it reads the same forward and backward.
          </p>
          <p>
            Example: Input: words = ["abc","car","ada","racecar","cool"] Output:
            "ada"
          </p>
          <p>
            Explanation: The first string that is palindromic is "ada". Note
            that "racecar" is also palindromic, but it is not the first.
          </p>
        </Box>
      </Column>
      <Column>
        <Editor />
      </Column>
    </Columns>
  );
};

export default Palindrome;
