import { formatToFirstLetterUppercase } from '@utils/utils';
import { useState } from 'react';

export const useAddCarForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(0);

  const onSubmitMake = (text: string) => {
    setMake(formatToFirstLetterUppercase(text));
  };
  const onSubmitModel = (text: string) => {
    setModel(formatToFirstLetterUppercase(text));
  };
  const onSubmitYear = (text: string) => {
    setYear(parseInt(text));
  };

  return {
    make,
    model,
    year,
    onSubmitMake,
    onSubmitModel,
    onSubmitYear,
  };
};
