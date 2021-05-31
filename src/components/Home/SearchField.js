import React, { useState, useEffect, useRef } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { DELAY_INPUT_FETCH } from '../../constants';
import { fetchCityWeather } from '../../store/actions/cityWeather';
import { fetchCitiesAC, resetCitiesAC } from '../../store/actions/citiesAC';
import WithLoadAndErrorHandler from '../hoc/WithLoadAndErrorHandler';

function SearchField() {
  const [input, setInput] = useState('');
  let typingTimeout = 0
  const formInput = useRef('');

  const citiesAC = useSelector((state) => state.citiesAC);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const city = JSON.parse(e.target.value);
    dispatch(fetchCityWeather(city));
    setInput('');
    formInput.current.value = '';
    dispatch(resetCitiesAC());
  };

  const handleChange = (e) => {
    if (typingTimeout) clearTimeout(typingTimeout)
    typingTimeout = setTimeout(() => setInput(e.target.value), DELAY_INPUT_FETCH)
  };

  useEffect(() => formInput.current.focus(), [dispatch]);

  useEffect(() => {
    if (input !== '') dispatch(fetchCitiesAC(input));
  }, [dispatch, input]);

  return (
    <Form className='justify-content-center w50 position-relative'>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>🔍</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control placeholder='Search City' onChange={handleChange} className='abort-input-default' ref={formInput} />
      </InputGroup>

      <WithLoadAndErrorHandler state={citiesAC}>
        {citiesAC.cities?.length && input ? (
          <Form.Control as='select' multiple onChange={handleSelect} className='position-absolute z-1'>
            {citiesAC.cities?.map((c) => (
              <option className='cursor-pointer' key={c.id} value={JSON.stringify(c)}>
                {c.city}, {c.country}
              </option>
            ))}
          </Form.Control>
        ) : (
          ''
        )}
      </WithLoadAndErrorHandler>
    </Form>
  );
}

export default SearchField;
