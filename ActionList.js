import React from "react";

const ActionList = ({ actions, onAddAction }) => (
  <div>
    {actions.map((action) => (
      <div key={action.id}>
        <span>
          {action.name} - {action.co2Reduction.toFixed(2)} kg CO2
        </span>
        <button onClick={() => onAddAction(action)}>Add</button>
      </div>
    ))}
  </div>
);

export default ActionList;
