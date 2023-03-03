import http from "../Redux/slices/getDataSlice";

class WeatherDataService {
  getAll() {
    return http.get("/forecast?q=marmora,us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d")
  }

  get(city) {
    return http.get(`/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`)
  }

  create(city) {
    return http.post(`/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`)
  }

  update(city, data) {
    return http.put(`/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`, data)
  }
}

export default new WeatherDataService();
