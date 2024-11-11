import React from "react";
import Action from "./Action";

const ImpactSummary = ({ actions, totalCO2 = 0, onClear, onRemove }) => {
  const treesSaved = Math.floor(totalCO2 / 10);
  const impactColor =
    totalCO2 < 0.5 ? "red" : totalCO2 < 1 ? "orange" : "green";

  return (
    <div className={`impact-summary ${impactColor}`}>
      <h2>Total CO2 Saved: {totalCO2.toFixed(2)} kg</h2>
      <p>Equivalent to planting {treesSaved} trees!</p>
      <button className="clear-button" onClick={onClear}>
        Clear All
      </button>
      {actions.length === 0 ? (
        <p className="no-actions-message">No actions tracked yet.</p>
      ) : (
        actions.map((action) => (
          <Action key={action.id} action={action} onRemove={onRemove} />
        ))
      )}
    </div>
  );
};

export default ImpactSummary;
