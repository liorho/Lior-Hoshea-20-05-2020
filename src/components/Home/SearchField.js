import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

import { Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityWeather } from '../../store/actions/cityWeather';
import { fetchCitiesAC, resetCitiesAC } from '../../store/actions/citiesAC';
import WithLoadAndErrorHandler from '../hoc/WithLoadAndErrorHandler';

const DELAY = 1000;

function SearchField() {
  const [input, setInput] = useState('');
  const formInput = useRef('');
  const citiesAC = useSelector((state) => state.citiesAC);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const { id, city, country } = JSON.parse(e.target.value);
    dispatch(fetchCityWeather(id, city, country));
    setInput('');
    ReactDOM.findDOMNode(formInput.current).value = '';
    dispatch(resetCitiesAC());
  };

  const handleChange = (e) => {
    setTimeout(() => setInput(e.target.value), DELAY);
  };

  useEffect(() => ReactDOM.findDOMNode(formInput.current).focus(), []);

  useEffect(() => {
    if (input !== '') dispatch(fetchCitiesAC(input));
  }, [input]);

  return (
    <Form>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>🔍</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control placeholder='Search City' onChange={handleChange} ref={formInput} />
      </InputGroup>
      <WithLoadAndErrorHandler state={citiesAC}>
        {citiesAC.cities.length ? (
          <Form.Control as='select' multiple onChange={handleSelect}>
            {citiesAC.cities?.map((c) => (
              <option key={c.id} value={JSON.stringify(c)}>
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
