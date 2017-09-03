import React from 'react';
import {Flex, Box} from 'reflexbox'


export default ({content1, content2}) => (
  <Flex>
    <Box w={2/3} pr={20}>
      {content1}
    </Box>
    <Box w={1/3}>
      {content2}
    </Box>
  </Flex>
)
