import Editor from "../Editor";
import { Columns, Column, Box, Title } from "react-bulma-companion";

const GoodPairs = () => {
  return (
    <Columns className="mt-6">
      <Column>
        <Box>
          <Title>Number of Good Pairs</Title>
          <p>
            Given an array of integers nums, return the number of good pairs. A
            pair (i, j) is called good if nums[i] === nums[j] and i &lt; j.
          </p>
          <p>Example: Input: nums = [1,2,3,1,1,3] Output: 4</p>
          <p>
            Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
            0-indexed.
          </p>
        </Box>
      </Column>
      <Column>
        <Editor />
      </Column>
    </Columns>
  );
};

export default GoodPairs;
