const API_KEY =
  import.meta.env
    .VITE_WEATHER_API_KEY;

export const getWeather =
  async (city = "Jaipur") => {

    try {

      const response =
        await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        );

      return await response.json();

    } catch (error) {

      console.error(error);

      return null;
    }
};