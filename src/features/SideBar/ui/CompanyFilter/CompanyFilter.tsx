import { Checkbox, Stack, CheckboxGroup, useCheckboxGroup } from '@chakra-ui/react';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import { useEffect } from 'react';
import { setCompany } from '../../model/store/sideBarSlice';

interface IProps {
  companyList?: string[];
}

const CompanyFilter = ({ companyList = ['Аэрофлот', 'J7', 'Пегас'] }: IProps) => {
  const { value, onChange } = useCheckboxGroup({ defaultValue: companyList });
  // console.log(value);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCompany(value as string[]));
  }, [value]);

  return (
    <CheckboxGroup defaultValue={companyList}>
      <Stack spacing={0}>
        {companyList.map((item, i) => (
          <Checkbox key={i} value={item} onChange={onChange}>
            {item}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export { CompanyFilter };
