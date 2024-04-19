import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/filter/filterSlice';
import { selectFilter } from 'components/redux/contacts/selectors.js';
import { FaSearch } from 'react-icons/fa';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.contacts}>
      <div className={styles.filterContainer}>
        <FaSearch className={styles.filterIcon} />
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Search contacts by name"
        />
      </div>
    </label>
  );
};

export default Filter;
