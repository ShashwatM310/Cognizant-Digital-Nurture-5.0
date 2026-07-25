import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  const headingStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{cohort.title}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
        <dt>Duration:</dt>
        <dd>{cohort.duration}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
