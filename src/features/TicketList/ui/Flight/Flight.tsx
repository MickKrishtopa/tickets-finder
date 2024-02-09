import { Flex, Box } from '@chakra-ui/react';

import { parsingDate } from '../../model/helpers/parsingDate';
import { parsingDuration } from '../../model/helpers/parsingDuration';
import { parsingCountChanges } from '../../model/helpers/parsingCountChanges';

import type { Leg } from '../../../../utils/types';

const Flight = (props: Leg) => {
  const { duration, segments } = props;

  const airline = segments[0].airline.caption;

  const departureCity = segments[0].departureCity.caption;
  const departureAirport = segments[0].departureAirport.caption;
  const departureAirportUid = segments[0].departureAirport.uid;
  const departureDate = segments[0].departureDate;

  const arrivalCity = segments[segments.length - 1].arrivalCity.caption;
  const arrivalAirport = segments[segments.length - 1].arrivalAirport.caption;
  const arrivalAirportUid = segments[segments.length - 1].arrivalAirport.uid;
  const arrivalDate = segments[segments.length - 1].arrivalDate;

  //   const {
  //     departureCity = 'Москва',
  //     departureAirport = 'ШЕРЕМЕТЬЕВО',
  //     departureAirportUid = 'SVO',
  //     arrivalCity = 'Париж',
  //     arrivalAirport = 'ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ',
  //     arrivalAirportUid = 'CDG',
  //     departureDate = '2020-08-18T06:10:00',
  //     duration = 735,
  //     arrivalDate = '2020-08-18T09:15:00',
  //     countChange = 1,
  //     airline = 'Аэрофлот',
  //   } = props;

  const parsedArrivalDate = parsingDate(arrivalDate);
  const parsedDepartureDate = parsingDate(departureDate);
  const parsedDuration = parsingDuration(duration);
  const countChange = parsingCountChanges(segments.length);

  return (
    <>
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
        <Box as="p" color="blue">
          <Box as="span" mr="10px" fontSize="30px" color="black">
            {parsedDepartureDate.time}
          </Box>
          {parsedDepartureDate.date}
        </Box>

        <Box>
          <Box as="p">&#8986;{parsedDuration}</Box>
        </Box>
        <Box as="p" color="blue">
          {parsedArrivalDate.date}
          <Box as="span" ml="10px" fontSize="30px" color="black">
            {parsedArrivalDate.time}
          </Box>
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
        <Box as="span" display="inline-block" fontSize="20px" color="orange">
          {countChange}
        </Box>
      </Box>

      {/* Company*/}
      <Box
        as="p"
        fontSize="24px"
        textAlign="start"
        m="0 20px"
        minHeight="50px"
        alignItems="center"
      >
        {`Рейс выполняет: ${airline}`}
      </Box>
    </>
  );
};

export { Flight };
