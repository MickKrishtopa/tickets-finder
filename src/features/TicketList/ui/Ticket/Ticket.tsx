import { Flex, Box, Button } from '@chakra-ui/react';

import { Flight } from '../Flight/Flight';
import type { Flight as FlightType } from '../../../../utils/types';

const Ticket = (props: FlightType) => {
  const { carrier, price } = props;

  return (
    <Flex
      width="100%"
      // backgroundColor="aqua;"
      minHeight="400px"
      flexDirection="column"
      mb="50px"
    >
      {/* ticket header */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="60px"
        padding="10px 20px"
        fontSize="20px"
        lineHeight="1.2"
        color="white"
        backgroundColor="rgba(20, 20, 255, 0.8)"
      >
        <Box as="h3" fontWeight="600">
          {carrier.caption}
        </Box>
        <Flex flexDirection="column" alignItems="end">
          <Box as="p" m={0}>
            {price.total.amount} &#8381;
          </Box>
          <Box as="p" m={0} fontSize="12px">
            Стоимость на одного взрослого пассажира
          </Box>
        </Flex>
      </Flex>

      <Flight {...props.legs[0]} />
      <Box width="100%" backgroundColor="blue" height="3px" margin="0 auto 5px" />
      <Flight {...props.legs[1]} />
      <Button colorScheme="blue" height="60px" fontSize="20px" color="white">
        ВЫБРАТЬ
      </Button>
    </Flex>
  );
};

export { Ticket };
