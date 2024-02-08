import { Flex } from '@chakra-ui/react';
import { SortList } from '../SortList/SortList';
import { ChangeFilter } from '../ChangeFilter/ChangeFilter';
import { PricePicker } from '../PrisePicker/PricePicker';
import { CompanyFilter } from '../CompanyFilter/CompanyFilter';

// import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <Flex as="aside" flexDirection="column" width="250px" gap="40px">
      <SortList />
      <ChangeFilter />
      <PricePicker />
      <CompanyFilter />
    </Flex>
  );
};

export { SideBar };
