import React from 'react';

export default ({ current, all, complete, incomplete }) => (
  <section id="filters">
    <p>Show ToDo Items:</p>
    <label htmlFor="filter-all">All</label>
    <input type="radio" name="filter" id="filter-all" onClick={all} defaultChecked={current === 'ALL' ? true : false} /><br/>
    <label htmlFor="filter-incomplete">Incomplete</label>
    <input type="radio" name="filter" id="filter-incomplete" onClick={incomplete} defaultChecked={current === 'INCOMPLETE' ? true : false} /><br/>
    <label htmlFor="filter-complete">Complete</label>
    <input type="radio" name="filter" id="filter-complete" onClick={complete} defaultChecked={current === 'COMPLETE' ? true : false} /><br/>
  </section>
);
