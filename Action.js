import React from "react";

const Action = ({ action, onRemove }) => (
  <div>
    <span>
      {action.name} - {(action.co2Reduction * action.count).toFixed(2)} kg CO2
      (x
      {action.count})
    </span>
    <button onClick={() => onRemove(action.id)}>Delete</button>
  </div>
);

export default Action;
