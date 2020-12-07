import React from 'react';
import PurposeTranslation from '../PurposeTranslation/PurposeTranslation';
import classes from './ResultInfo.module.css';

const ResultInfo = (props) => {
  const onClick = () => {
    props.next();
  };

  let classResult;
  let comment = null;
  let classComment = null;

  if (props.reuslt === 'Успех') classResult = classes.success;
  if (props.reuslt === 'Неудача') {
    classResult = classes.fail;
    comment = props.item.comment;
    classComment = classes.comment;
  }

  return (
    <div>
      <PurposeTranslation vocabulary={props.vocabulary} />
      <div className={classes.resultBox + ' ' + classResult} >
        <div className={classes.result}>{props.reuslt}</div>
        <div className={classes.resultText}>{props.item.engVersion}</div>
        <div className={classComment}>{comment}</div>
        <button className={classes.btn} onClick={onClick}>Дальше</button>
      </div>
    </div>
  )
}

export default ResultInfo;