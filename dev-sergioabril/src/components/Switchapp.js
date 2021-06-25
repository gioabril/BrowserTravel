import React from 'react';
import './switchapp.scss';
import Switch from '@material-ui/core/Switch';

function Switchapp() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return(
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        color="dark"
      />
    </div>
  );
}

export default Switchapp;