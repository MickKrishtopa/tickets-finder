import { useState } from 'react';
import { Flex, Radio, RadioGroup, Stack, Box } from '@chakra-ui/react';

const SortList = () => {
  const [value, setValue] = useState('1');

  return (
    <Flex flexDirection="column" gap="10px" alignItems="start" width="200px">
      <Box as="h2" fontWeight="bold">
        Сортировать
      </Box>

      <RadioGroup onChange={setValue} value={value}>
        <Stack>
          <Radio value="incCost">По возрастанию цены</Radio>
          <Radio value="decCost">По уменьшению цены</Radio>
          <Radio value="time">По времени в пути</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export { SortList };
