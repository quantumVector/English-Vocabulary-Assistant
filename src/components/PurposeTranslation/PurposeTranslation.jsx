import React from 'react';
import classes from './PurposeTranslation.module.css';

const PurposeTranslation = (props) => {
  return (
    <div className={classes.word}>{props.task}</div>
  )
}

export default PurposeTranslation;