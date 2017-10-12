import React from 'react'
import _ from 'lodash'
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines'

const Char=function(props){
	return (
		<div>
			<Sparklines data={props.data} width={100} height={80}>
				<SparklinesLine color={props.color}></SparklinesLine>
				<SparklinesReferenceLine type="avg"></SparklinesReferenceLine>

			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>

	)

}
function average(data){
	return _.round(_.sum(data)/data.length)
}
export default Char