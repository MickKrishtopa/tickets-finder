// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { MOCKED_DATA } from '../../../../utils/mockedFlights';

import type { FlightInfo } from '../../../../utils/types';

import styles from './TicketList.module.scss';
import { Ticket } from '../Ticket/Ticket';
import { setCarrierList, setMinMaxPrice } from '../../model/store/ticketListSlice';
import { findeMinMaxPrice } from '../../model/helpers/findeMinPrice';

const TicketList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<FlightInfo[]>(
    MOCKED_DATA.result.flights as FlightInfo[],
  );

  const [filtredData, setFiltredData] = useState<FlightInfo[]>([]);
  const [stepPagination, setStepPagination] = useState(0);

  const sort = useAppSelector((state) => state.sideBar.sort);
  const change = useAppSelector((state) => state.sideBar.change);
  const priceInterval = useAppSelector((state) => state.sideBar.priceInterval);
  const company = useAppSelector((state) => state.sideBar.company);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(setTicketListData(data));

    const carrierList = data.map((flight) => flight.flight.carrier.caption);
    const unicCarrier = [...new Set(carrierList)];
    dispatch(setCarrierList(unicCarrier));

    const minMaxPrice = findeMinMaxPrice(data);
    console.log(minMaxPrice);
    dispatch(setMinMaxPrice(minMaxPrice));

    // console.log(unicCarrier);
  }, [data]);

  useEffect(() => {
    let filtredStepData = data;

    filtredStepData = filtredStepData.filter((item) =>
      company.includes(item.flight.carrier.caption),
    );

    if (priceInterval.min) {
      filtredStepData = filtredStepData.filter(
        (item) => Number(item.flight.price.total.amount) > Number(priceInterval.min),
      );
    }

    if (priceInterval.max) {
      filtredStepData = filtredStepData.filter(
        (item) => Number(item.flight.price.total.amount) < Number(priceInterval.max),
      );
    }

    // changes filter
    if (change.withoutChange && !change.withChange.one && !change.withChange.two) {
      filtredStepData = filtredStepData.filter((item) =>
        item.flight.legs.every((leg) => leg.segments.length === 1),
      );
    }

    if (change.withoutChange && change.withChange.one && !change.withChange.two) {
      filtredStepData = filtredStepData.filter((item) =>
        item.flight.legs.every((leg) => leg.segments.length <= 2),
      );
    }

    if (change.withoutChange && change.withChange.one && change.withChange.two) {
      filtredStepData = filtredStepData.filter((item) =>
        item.flight.legs.every((leg) => leg.segments.length <= 3),
      );
    }

    if (!change.withoutChange && change.withChange.one && !change.withChange.two) {
      filtredStepData = filtredStepData.filter((item) =>
        item.flight.legs.every((leg) => leg.segments.length === 2),
      );
    }

    if (!change.withoutChange && change.withChange.one && change.withChange.two) {
      filtredStepData = filtredStepData.filter((item) =>
        item.flight.legs.every(
          (leg) => leg.segments.length === 2 || leg.segments.length === 3,
        ),
      );
    }

    if (!change.withoutChange && !change.withChange.one && change.withChange.two) {
      filtredStepData = filtredStepData.filter((item) =>
        item.flight.legs.every((leg) => leg.segments.length === 3),
      );
    }

    if (sort) {
      if (sort === 'incCost') {
        filtredStepData = filtredStepData.sort(
          (a, b) =>
            Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount),
        );
      }
      if (sort === 'decCost') {
        filtredStepData = filtredStepData.sort(
          (a, b) =>
            Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount),
        );
      }
      if (sort === 'time') {
        filtredStepData = filtredStepData.sort(
          (a, b) =>
            Number(a.flight.legs.reduce((acc, cur) => acc + cur.duration, 0)) -
            Number(b.flight.legs.reduce((acc, cur) => acc + cur.duration, 0)),
        );
      }
    }

    setFiltredData(filtredStepData);
    setStepPagination(0);
  }, [sort, change, priceInterval, company]);

  return (
    <ul className={styles['ticket-list']}>
      {filtredData.length ? (
        <>
          {filtredData.slice(0, 5 + stepPagination * 5).map((flight: FlightInfo) => (
            <Ticket key={flight.flightToken} {...flight.flight} />
          ))}
          {filtredData.length > 5 + stepPagination * 5 ? (
            <Button
              isDisabled={filtredData.length < 5 + stepPagination * 5}
              onClick={() => setStepPagination(stepPagination + 1)}
              width="50%"
              colorScheme="blue"
              color="white"
            >
              Еще
            </Button>
          ) : null}
        </>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </ul>
  );
};

export { TicketList };
