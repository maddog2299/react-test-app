import React, { useState, useEffect, useRef } from 'react';
import './Word.css';
import PropTypes from 'prop-types';

function Word(props) {
	const calc = () => {
		return 12 * props.value.length * props.sizeCoef;
	};
	return (
		<>
      {props.sizeCoef && props.sizeCoef > 1? (
          <span className="word-wrapper inline" style={{ height: calc() }}>
            {props.value}
          </span>
      ) : (
          <div className="word-wrapper">
						{props.value}
					</div>
      )}
		</>
	)
}

Word.propTypes = {
  value: PropTypes.string,
  sizeCoef: PropTypes.number
};

export default Word;
