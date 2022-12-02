import { request } from "axios";

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: 'London', days: '5'},
  headers: {
    'X-RapidAPI-Key': 'cf63d833d9msh6640c561d5fa341p17fbd1jsnb1c6d88d3e7a',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});