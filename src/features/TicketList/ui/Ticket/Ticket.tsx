import { Flex, Box } from '@chakra-ui/react';
import styles from './Ticket.module.scss';
import { findDOMNode } from 'react-dom';

const Ticket = (props) => {
  const {
    companyTitle = 'Аэрофлот',
    price = 1000,
    departureCity = 'Москва',
    departureAirport = 'ШЕРЕМЕТЬЕВО',
    departureAirportUid = 'SVO',
    arrivalCity = 'Париж',
    arrivalAirport = 'ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ',
    arrivalAirportUid = 'CDG',
    departureDate = '20.30 18 авг. вт.',
    duration = '15ч 45 мин',
    arrivalDate = '19 авг. ср. 9.25',
    countChange = 1,
    airline = 'Аэрофлот',
  } = props;

  return (
    <Flex width="100%" backgroundColor="aqua;" minHeight="400px" flexDirection="column">
      {/* ticket header */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="80px"
        padding="20px"
        fontSize="20px"
        lineHeight="1.2"
        color="white"
        backgroundColor="rgba(20, 20, 255, 0.8)"
      >
        <Box as="h3" fontWeight="600">
          {companyTitle}
        </Box>
        <Flex flexDirection="column" alignItems="end">
          <Box as="p" m={0}>
            {price} &#8381;
          </Box>
          <Box as="p" m={0} fontSize="12px">
            Стоимость на одного сзрослого пассажира
          </Box>
        </Flex>
      </Flex>

      {/* City marshrut*/}
      <Flex
        as="p"
        fontSize="24px"
        textAlign="start"
        m="0 20px"
        borderBottom="1px solid gray"
        minHeight="50px"
        alignItems="center"
      >
        {`${departureCity}, ${departureAirport}`}
        {`   `}
        <Box as="span" color="blue" m="0 5px">
          {`(${departureAirportUid})`}
        </Box>
        &#8594; {`${arrivalCity}, ${arrivalAirport} `}
        <Box as="span" color="blue" m="0 5px">
          {`(${arrivalAirportUid})`}
        </Box>
      </Flex>

      {/* Time */}

      <Flex
        fontSize="24px"
        justifyContent="space-between"
        m="0 20px"
        minHeight="50px"
        alignItems="center"
      >
        <Box>
          <Box as="p">{departureDate}</Box>
        </Box>
        <Box>
          <Box as="p">{duration}</Box>
        </Box>
        <Box>
          <Box as="p">{arrivalDate}</Box>
        </Box>
      </Flex>
      <Box
        as="p"
        position="relative"
        overflow="hidden"
        textAlign="center"
        _before={{
          content: `""`,
          display: 'inline-block',
          width: '25%',
          height: '2px',
          backgroundColor: 'black',
          position: 'relative',
          marginLeft: '-100%',
          left: '-14px',
          verticalAlign: 'middle',
        }}
        _after={{
          content: `""`,
          display: 'inline-block',
          width: '25%',
          height: '2px',
          backgroundColor: 'black',
          position: 'relative',
          marginRight: '-100%',
          right: '-14px',
          verticalAlign: 'middle',
        }}
      >
        <Box
          as="span"
          display="inline-block"
          fontSize="20px"
          color="orange"
        >{`${countChange} пересадка`}</Box>
      </Box>

      {/* Company*/}
      <Box
        as="p"
        fontSize="24px"
        textAlign="start"
        m="0 20px"
        borderBottom="3px solid blue"
        minHeight="50px"
        alignItems="center"
      >
        {`Рейс выполняет: ${airline}`}
      </Box>
    </Flex>
  );
};

export { Ticket };
