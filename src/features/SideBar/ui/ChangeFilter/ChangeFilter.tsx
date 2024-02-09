import { useEffect, useState } from 'react';

import { Checkbox, CheckboxGroup, Flex, Stack } from '@chakra-ui/react';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import { setChange } from '../../model/store/sideBarSlice';

const ChangeFilter = () => {
  const [checkedItems, setCheckedItems] = useState({
    withChange: {
      one: false,
      two: false,
    },
    withoutChange: false,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setChange(checkedItems));
  }, [checkedItems]);

  const allGroupChecked = checkedItems.withChange.one && checkedItems.withChange.two;
  const halfGroupChecked =
    (checkedItems.withChange.one && !checkedItems.withChange.two) ||
    (!checkedItems.withChange.one && checkedItems.withChange.two);

  return (
    <Flex flexDirection="column" justifyContent="start">
      <CheckboxGroup>
        <Checkbox
          isChecked={allGroupChecked}
          isIndeterminate={halfGroupChecked}
          onChange={() =>
            allGroupChecked
              ? setCheckedItems({
                  ...checkedItems,
                  withChange: {
                    one: false,
                    two: false,
                  },
                })
              : setCheckedItems({
                  ...checkedItems,
                  withChange: {
                    one: true,
                    two: true,
                  },
                })
          }
        >
          С пересадками
        </Checkbox>
        <Stack pl={6} mt={1} spacing={1} mb={3}>
          <Checkbox
            isChecked={checkedItems.withChange.one}
            onChange={() =>
              setCheckedItems({
                ...checkedItems,
                withChange: {
                  ...checkedItems.withChange,
                  one: !checkedItems.withChange.one,
                },
              })
            }
          >
            1 пересадка
          </Checkbox>
          <Checkbox
            isChecked={checkedItems.withChange.two}
            onChange={() =>
              setCheckedItems({
                ...checkedItems,
                withChange: {
                  ...checkedItems.withChange,
                  two: !checkedItems.withChange.two,
                },
              })
            }
          >
            2 пересадки
          </Checkbox>
        </Stack>
        <Checkbox
          isChecked={checkedItems.withoutChange}
          onChange={() =>
            setCheckedItems({
              ...checkedItems,
              withoutChange: !checkedItems.withoutChange,
            })
          }
        >
          Без пересадок
        </Checkbox>
      </CheckboxGroup>
    </Flex>
  );
};

export { ChangeFilter };
