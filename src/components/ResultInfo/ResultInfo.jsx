import React from 'react';

const ResultInfo = (props) => {
  const onClick = () => {
    props.next();
  };

  return (
    <div>
      <div>{props.reuslt}</div>
      <div>{props.item.engVersion}</div>
      <button onClick={onClick}>Дальше</button>
    </div>
  )
}

export default ResultInfo;