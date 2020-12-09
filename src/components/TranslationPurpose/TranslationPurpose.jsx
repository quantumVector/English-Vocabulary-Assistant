import React from 'react';
import classes from './TranslationPurpose.module.css';

const TranslationPurpose = (props) => {
  return (
    <div className={classes.word}>{props.task}</div>
  )
}

export default TranslationPurpose;