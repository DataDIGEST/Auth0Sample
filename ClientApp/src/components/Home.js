import React, { Component } from 'react';

export class Home extends Component {
  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>This is a sample minimum configuration for authentication with Auth0, based on the standard dotnet template for a SPA using React.</p>
        <p>This page and the Counter page are publicly accessible, but to view the weather forecast you will need to be logged in. You will also need to be logged in to be able to call the Get method on the WeatherForecastController.</p>
      </div>
    );
  }
}
