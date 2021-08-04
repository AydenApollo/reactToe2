import React from "react";
import Board from './board'
import Game from './game'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
<div>
<Board/>
<Game/>
</div>


export default Square