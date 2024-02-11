import { Checkbox, Stack, CheckboxGroup, useCheckboxGroup } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { useEffect } from 'react';
import { setCompany } from '../../model/store/sideBarSlice';

const CompanyFilter = () => {
  const companyList = useAppSelector((state) => state.ticketList.carrierList);

  const { value, setValue } = useCheckboxGroup();

  useEffect(() => {
    setValue(companyList);
  }, [companyList]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCompany(value as string[]));
  }, [value]);

  return (
    <CheckboxGroup value={value} onChange={setValue}>
      <Stack spacing={0}>
        {companyList.map((item, i) => (
          // <Checkbox key={i} value={item} onChange={onChange} isChecked={true}>
          <Checkbox key={i} value={item}>
            {item}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export { CompanyFilter };
