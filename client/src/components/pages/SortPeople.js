import Editor from "../Editor";
import { Columns, Column, Box, Title } from "react-bulma-companion";

const SortPeople = () => {
  return (
    <Columns className="mt-6">
      <Column>
        <Box>
          <Title>Sort the People</Title>
          <p>
            You are given an array of strings names, and an array heights that
            consists of distinct positive integers. Both arrays are of length n.
          </p>
          <p>
            For each index i, names[i] and heights[i] denote the name and height
            of the ith person. Return names sorted in descending order by the
            people's heights.
          </p>
          <p>
            Example: Input: names = ["Mary","John","Emma"], heights =
            [180,165,170] Output: ["Mary","Emma","John"]
          </p>
          <p>Explanation: Mary is the tallest, followed by Emma and John.</p>
        </Box>
      </Column>
      <Column>
        <Editor />
      </Column>
    </Columns>
  );
};

export default SortPeople;
