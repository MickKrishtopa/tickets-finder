import type { FlightInfo } from '../../../../utils/types';

const findeMinMaxPrice = (data: FlightInfo[]) => {
  const res = {
    min: Infinity,
    max: 0,
  };

  data.forEach((item) => {
    if (res.min > Number(item.flight.price.total.amount)) {
      res.min = Number(item.flight.price.total.amount);
    }
    if (res.max < Number(item.flight.price.total.amount)) {
      res.max = Number(item.flight.price.total.amount);
    }
  });
  return res;
};

export { findeMinMaxPrice };
