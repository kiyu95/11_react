import ApiComponent from "./02_api/02_fetch-then";
import AxiosCallComponent from "./02_api/03_axios";
import EmogiContainer from "./02_api/04_github-api-emoji";
import Container from "./03_data-component/01_rendering-component";
import Weather from "./03_data-component/02_weather-promise";
import WeatherContainer from "./03_data-component/03_weather-async-await";
import Robohash from "./03_data-component/04_example";
import Leauge from "./03_data-component/04_example";

function App() {
  return (
    <div className="App">
      {/* <ApiComponent/> */}
      {/* <AxiosCallComponent/> */}
      {/* <EmogiContainer/> */}
      {/* <Container/> */}
      {/* <WeatherContainer/> */}
      {/* <Weather/> */}
      <Robohash/>
    </div>
  );
}

export default App;
