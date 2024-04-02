// src/components/TravelForm.js

import React, { useState } from 'react';

function TravelForm() {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [transportationMode, setTransportationMode] = useState('');
  const [budget, setBudget] = useState('');
  const [activities, setActivities] = useState('');
  const [accommodation, setAccommodation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., call API)
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto max-w-md mt-8">
      <label htmlFor="currentLocation" className="block mb-2">Current Location:</label>
      <input type="text" id="currentLocation" value={currentLocation} onChange={(e) => setCurrentLocation(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300" />
      
      <label htmlFor="destination" className="block mb-2">Destination:</label>
      <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300" />
      
      <label htmlFor="travelDate" className="block mb-2">Travel Date:</label>
      <input type="date" id="travelDate" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300" />
      
      <label htmlFor="transportationMode" className="block mb-2">Transportation Mode:</label>
      <select id="transportationMode" value={transportationMode} onChange={(e) => setTransportationMode(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select Mode</option>
        <option value="driving">Driving</option>
        <option value="publicTransit">Public Transit</option>
        <option value="flight">Flight</option>
        <option value="carpooling">Carpooling</option>
      </select>
      
      <label htmlFor="budget" className="block mb-2">Budget:</label>
      <input type="number" id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300" />
      
      <label htmlFor="activities" className="block mb-2">Preferred Activities:</label>
      <input type="text" id="activities" value={activities} onChange={(e) => setActivities(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300" />
      
      <label htmlFor="accommodation" className="block mb-2">Accommodation Preferences:</label>
      <input type="text" id="accommodation" value={accommodation} onChange={(e) => setAccommodation(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300" />
      
      <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Plan My Trip</button>
    </form>
  );
}

export default TravelForm;
