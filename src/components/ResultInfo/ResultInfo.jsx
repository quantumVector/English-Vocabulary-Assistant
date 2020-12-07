import React from 'react';
import classes from './ResultInfo.module.css';

const ResultInfo = (props) => {
  const onClick = () => {
    props.next();
  };

  let classResult;

  if (props.reuslt === 'Успех') classResult = classes.success;
  if (props.reuslt === 'Неудача') classResult = classes.fail;

  console.log(classResult)

  return (
    <div className={classes.resultBox + ' ' + classResult} >
      <div className={classes.result}>{props.reuslt}</div>
      <div className={classes.resultText}>{props.item.engVersion}</div>
      <button className={classes.btn} onClick={onClick}>Дальше</button>
    </div>
  )
}

export default ResultInfo;