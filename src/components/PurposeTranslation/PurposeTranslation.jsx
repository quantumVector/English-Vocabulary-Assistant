import React from 'react';
import classes from './PurposeTranslation.module.css';

const PurposeTranslation = (props) => {
  return (
    <div className={classes.word}>{props.vocabulary[props.vocabulary.length - 1].rusVersion}</div>
  )
}

export default PurposeTranslation;