import React from 'react'
import {connect} from 'react-redux'
import {Sparklines,SparklinesLine} from 'react-sparklines'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends React.Component{
	renderWeather(cityData){
		const name=cityData.city.name
		var obArr=cityData.list
		const lon=cityData.city.coord.lon
		const lat=cityData.city.coord.lat
		console.log(obArr)
		var TempData=obArr.map(function(arr){
			return arr.main.temp
		})
		var PressureData=obArr.map(function(arr){
			return arr.main.pressure
		})
		var HumidData=obArr.map(function(arr){
			return arr.main.humidity
		})
		console.log(TempData)
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={TempData} color="orange" units="K"></Chart></td>
				<td><Chart data={PressureData} color="green" units="hPa"></Chart></td>
				<td><Chart data={HumidData} color="blue" units="%"></Chart></td>
			</tr>
		)
	}
	render(){
		return(
				<table className="table table-hover">
						<thead>
							<tr>
								<th>City</th>
								<th>Temperature (K)</th>
								<th>Pressure (hPa)</th>
								<th>Humidity (%)</th>
							</tr>
						</thead>
						<tbody>
							{this.props.weather.map(this.renderWeather)}
						</tbody>
				</table>
		)
	}
}

function mapStateToProps(state){
	return {weather:state.weather}
}
export default connect(mapStateToProps)(WeatherList)