export default function WeatherHeader() {
  return (
    <section className="header">
      <span className="header__city">City</span>
      <span className="header__temperature">Temperature (F)</span>
      <span className="header__pressure">Pressure (hPa)</span>
      <span className="header__humidity">Humidity (%)</span>
    </section>
  );
}
