import React from 'react';

export default ({ current, all, complete, incomplete }) => (
  <section id="filters">
    <p>Show ToDo Items:</p>
    <label htmlFor="filter-all">All</label>
    <input type="radio" name="filter" id="filter-all" onClick={all} checked={current === 'ALL' ? true : false} /><br/>
    <label htmlFor="filter-incomplete">Incomplete</label>
    <input type="radio" name="filter" id="filter-incomplete" onClick={incomplete} checked={current === 'INCOMPLETE' ? true : false} /><br/>
    <label htmlFor="filter-complete">Complete</label>
    <input type="radio" name="filter" id="filter-complete" onClick={complete} checked={current === 'COMPLETE' ? true : false} /><br/>
  </section>
);
