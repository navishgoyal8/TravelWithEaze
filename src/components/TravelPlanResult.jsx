// src/components/TravelPlanResult.js

import React from 'react';

function TravelPlanResult({ plan }) {
  return (
    <div>
      <h2>Your Travel Plan:</h2>
      <p>{plan}</p>
    </div>
  );
}

export default TravelPlanResult;
