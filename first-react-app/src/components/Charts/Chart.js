import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            {
                props.dataPoint.map(dataPoint => (
                    <ChartBar
                        value={dataPoint.value}
                        label={dataPoint.label}
                        key={dataPoint.label}
                        maxValue={totalMax}
                    />
                ))
            }
        </div>
    )
}

export default Chart