import React, { useState, useEffect } from "react";
import * as weatherForecastApi from "../api/weatherForecastApi";
import { useAuth0 } from "../react-auth0-spa";

export const FetchData = () => {
  const { getTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [forecasts, setForecasts] = useState([]);

  const populateWeatherData = async () => {
    const token = await getTokenSilently();
    const data = await weatherForecastApi.get(token);
    setForecasts(data);
    setLoading(false);
  };

  useEffect(() => {
    populateWeatherData();
  }, []);

  const renderForecastsTable = (forecasts) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  let contents = loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderForecastsTable(forecasts)
  );

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
};
