import styles from './TicketList.module.scss';

import { Ticket } from '../Ticket/Ticket';
import { useEffect, useState } from 'react';
import { MOCKED_DATA } from '../../../../utils/mockedFlights';

import type { FlightInfo } from '../../../../utils/types';
import { useAppSelector } from '../../../../store/hooks/hooks';

const TicketList = () => {
  const [data, setData] = useState<FlightInfo[]>(MOCKED_DATA.result.flights);
  const [sortingData, setSortingData] = useState<FlightInfo[]>([]);
  const [dataToShow, setDataToShow] = useState<FlightInfo[]>([]);
  // console.log(data);

  const sort = useAppSelector((state) => state.sideBar.sort);
  const change = useAppSelector((state) => state.sideBar.change);
  const priceInterval = useAppSelector((state) => state.sideBar.priceInterval);
  const company = useAppSelector((state) => state.sideBar.company);

  useEffect(() => {
    // const res = JSON.parse(dataJSON);
    console.log(MOCKED_DATA);
  }, [sort, change, priceInterval, company]);

  return (
    <ul className={styles['ticket-list']}>
      {data.slice(0, 5).map((flight: FlightInfo) => (
        <Ticket key={flight.flightToken} {...flight.flight} />
      ))}
    </ul>
  );
};

export { TicketList };
