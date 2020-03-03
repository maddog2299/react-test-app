import React from 'react';
import './UserInput.css';
import PropTypes from 'prop-types';

function UserInput(props) {
	return (
		<>
		  <input type={props.type} onChange={props.handleChange}/>
		</>
	)
}

UserInput.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default UserInput;
