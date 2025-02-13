import React, { useState } from "react";
import axios from "axios";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock flight data (since API does not return real flights)
  const mockFlights = [
    {
      airline: "Mock Airways",
      price: "500",
      currency: "USD",
      departure: "LAX",
      arrival: "LHR",
      date: "2024-06-15",
    },
    {
      airline: "Sample Airlines",
      price: "620",
      currency: "USD",
      departure: "LAX",
      arrival: "LHR",
      date: "2024-06-15",
    },
  ];

  const fetchFlights = async () => {
    setLoading(true);
    setError("");

    try {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFlights(mockFlights);
    } catch (err) {
      setError("Error fetching flight data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <button onClick={fetchFlights} disabled={loading}>
        {loading ? "Loading..." : "Find Flights"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <li key={index}>
              {flight.airline} - {flight.price} {flight.currency} | {flight.departure} → {flight.arrival} on {flight.date}
            </li>
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </ul>
    </div>
  );
};

export default Flights;
