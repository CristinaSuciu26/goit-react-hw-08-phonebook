import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'components/redux/contacts/slices';
import { selectFilter } from 'components/redux/contacts/selectors.js';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <label className={styles.contacts}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
