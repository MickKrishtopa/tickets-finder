import { useEffect, useState } from 'react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import { setPriceInterval } from '../../model/store/sideBarSlice';

const PricePicker = ({ maxValue = 20000 }) => {
  const [lowestPrice, setLowestPrice] = useState<string>('');
  const [highestPrice, setHighestPrice] = useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    const priceInteval = {
      min: lowestPrice,
      max: highestPrice,
    };
    dispatch(setPriceInterval(priceInteval));
  }, [lowestPrice, highestPrice]);

  return (
    <>
      <Stack spacing={3}>
        <Input
          type="number"
          value={lowestPrice}
          onChange={(e) => setLowestPrice(e.target.value)}
          placeholder="От"
          size="md"
        />
        <Input
          placeholder="До"
          size="md"
          type="number"
          value={highestPrice}
          onChange={(e) => setHighestPrice(e.target.value)}
        />
      </Stack>
      <RangeSlider
        aria-label={['min', 'max']}
        min={0}
        max={maxValue}
        defaultValue={[2000, 30000]}
        width="200px"
        value={[Number(lowestPrice), Number(highestPrice)]}
        onChange={(val) => {
          console.log(val);
          setLowestPrice(val[0].toString());
          setHighestPrice(val[1].toString());
        }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
};

export { PricePicker };
