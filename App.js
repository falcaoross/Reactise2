import "./App.css";
import React, { useState, useEffect } from "react";
import ActionList from "./components/ActionList";
import ImpactSummary from "./components/ImpactSummary";

const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

const App = () => {
  const [actions, setActions] = useState([]);
  const [totalCO2, setTotalCO2] = useState(0);

  // Load data from localStorage when the app loads
  useEffect(() => {
    const storedActions =
      JSON.parse(localStorage.getItem("trackedActions")) || [];
    setActions(storedActions);
    calculateTotalCO2(storedActions);
  }, []);

  // Update localStorage whenever actions change
  useEffect(() => {
    localStorage.setItem("trackedActions", JSON.stringify(actions));
    calculateTotalCO2(actions);
  }, [actions]);

  const calculateTotalCO2 = (actions) => {
    const total = actions.reduce(
      (sum, action) => sum + action.co2Reduction * action.count,
      0
    );
    setTotalCO2(total);
  };

  const handleAddAction = (action) => {
    const existingAction = actions.find((a) => a.id === action.id);
    if (existingAction) {
      setActions(
        actions.map((a) =>
          a.id === action.id ? { ...a, count: a.count + 1 } : a
        )
      );
    } else {
      setActions([...actions, { ...action, count: 1 }]);
    }
  };

  const handleClearActions = () => setActions([]);

  const handleRemoveAction = (id) => {
    setActions(actions.filter((action) => action.id !== id));
  };

  return (
    <div className="app-container">
      <ActionList actions={ecoActions} onAddAction={handleAddAction} />
      <ImpactSummary
        actions={actions}
        totalCO2={totalCO2}
        onClear={handleClearActions}
        onRemove={handleRemoveAction}
      />
    </div>
  );
};

export default App;
