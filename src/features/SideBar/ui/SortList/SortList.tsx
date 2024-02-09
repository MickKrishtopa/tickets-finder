import { useEffect, useState } from 'react';
import { Flex, Radio, RadioGroup, Stack, Box } from '@chakra-ui/react';

import { useAppDispatch } from '../../../../store/hooks/hooks';
import { setSort } from '../../model/store/sideBarSlice';

import { SortType } from '../../model/types/types';

const SortList = () => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSort(value as SortType));
  }, [value]);

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
