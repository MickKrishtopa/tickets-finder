import styles from './TicketList.module.scss';

import { Ticket } from '../Ticket/Ticket';
import { useEffect, useState } from 'react';
import { MOCKED_DATA } from '../../../../utils/mockedFlights';

import type { FlightInfo } from '../../../../utils/types';

const TicketList = () => {
  const [data, setData] = useState<FlightInfo[]>(MOCKED_DATA.result.flights);
  console.log(data);

  // useEffect(() => {
  //   // const res = JSON.parse(dataJSON);
  //   console.log(MOCKED_DATA);SFD
  // }, []);

  return (
    <ul className={styles['ticket-list']}>
      {data.slice(0, 5).map((flight: FlightInfo) => (
        <Ticket key={flight.flightToken} {...flight.flight} />
      ))}
    </ul>
  );
};

export { TicketList };
