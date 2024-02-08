import { Checkbox, Stack, CheckboxGroup, useCheckboxGroup } from '@chakra-ui/react';

interface IProps {
  companyList?: string[];
}

const CompanyFilter = ({ companyList = ['Аэрофлот', 'J7', 'Пегас'] }: IProps) => {
  const { value, onChange } = useCheckboxGroup({ defaultValue: companyList });
  console.log(value);
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
