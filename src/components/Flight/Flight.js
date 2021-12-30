import React from "react";
import classes from "./Flight.module.scss"


const Flight = props => {

    const timeTravel = (mins) => {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + ' ч ' + minutes + ' мин';
    }

    const arrivalCityCaption = props.arrivalSegment.arrivalCity.caption
    const arrivalAirportCaption = props.arrivalSegment.arrivalAirport.caption
    const arrivalAirportUid = props.arrivalSegment.arrivalAirport.uid
    const arrivalDate = new Date(props.arrivalSegment.arrivalDate)
    let arrivalCityCaption2 = null
    let arrivalAirportCaption2 = null
    let arrivalAirportUid2 = null
    let arrivalDate2 = null
    if (props.departureSegment !== undefined) {
        if (props.departureSegment.arrivalCity !== undefined)
            arrivalCityCaption2 = props.departureSegment.arrivalCity.caption
        arrivalAirportCaption2 = props.departureSegment.arrivalAirport.caption
        arrivalAirportUid2 = props.departureSegment.arrivalAirport.uid
        arrivalDate2 = new Date(props.departureSegment.arrivalDate)
    }
        
    const departureCityCaption = props.arrivalSegment.departureCity.caption
    const departureAirportCaption = props.arrivalSegment.departureAirport.caption
    const departureAirportUid = props.arrivalSegment.departureAirport.uid
    const departureDate = new Date(props.arrivalSegment.departureDate)
    let departureCityCaption2 = null
    let departureAirportCaption2 = null
    let departureAirportUid2 = null
    let departureDate2 = null
    if (props.departureSegment !== undefined) {
        departureCityCaption2 = props.departureSegment.departureCity.caption
        departureAirportCaption2 = props.departureSegment.departureAirport.caption
        departureAirportUid2 = props.departureSegment.departureAirport.uid
        departureDate2 = new Date(props.departureSegment.departureDate)
    }

    const days =["вск", "пн", "вт", "ср", "чт", "пт", "сб"];

    const renderSegments = () => {
        return (
            <div>
                <div style={{
                    width: '100%',
                    padding: '5px 10px'
                }}>
                    {departureCityCaption2}, {departureAirportCaption2 + ' '} 
                    <span style={{color: '#1E90FF'}}>
                        ({departureAirportUid2}) 
                        <span style={{fontSize: 26}}>→ </span>
                    </span> 
                    {arrivalCityCaption2}, {arrivalAirportCaption2 + ' '} 
                    <span style={{color: '#1E90FF'}}>({arrivalAirportUid2})</span>
                    <hr style={{opacity: .3}}/>
                </div>
                <div className={classes.Time}>
                    <div>
                        <span style={{fontSize: 23}}>
                            {departureDate2.getUTCHours()+':' + (departureDate2.getUTCMinutes().toString().length === 1 ? departureDate2.getUTCMinutes() + '0' : departureDate2.getUTCMinutes()) + ' '}
                        </span> 
                        <span style={{fontSize: 18, color: '#1E90FF'}}>
                            {departureDate2.getUTCDate()} {departureDate2.toLocaleString('ru', { month: 'short' })} {days[departureDate2.getUTCDay()]}
                        </span>
                    </div>
                    <div style={{fontSize: 23, margin: '0 auto'}}>
                        ◷ {timeTravel(props.departureSegment.travelDuration)}
                    </div>
                    <div>
                        <span style={{fontSize: 18, color: '#1E90FF'}}>
                            {arrivalDate2.getUTCDate()} {arrivalDate2.toLocaleString('ru', { month: 'short' })} {days[arrivalDate2.getUTCDay()] + ' '}
                        </span> 
                        <span style={{fontSize: 23}}>
                            {arrivalDate2.getUTCHours() + ':' + (arrivalDate2.getUTCMinutes().toString().length === 1 ? arrivalDate2.getUTCMinutes() + '0' : arrivalDate2.getUTCMinutes())}
                        </span>
                    </div>
                    <br />
                    {
                        props.arrivalSegment.arrivalCity.caption.toLowerCase() === 'париж' ? 
                        <div className={classes.hrSect}>
                            <span style={{color: '#FF8C00'}}>1 пересадка</span>
                        </div> :
                        <div className={classes.hrSect2}>
                            <p></p>
                        </div>
                    }
                </div>
                <div>
                    <p style={{padding: "0px 10px"}}>
                        Рейс выполняет: {
                            props.departureSegment.operationAirline !== undefined ? 
                            props.departureSegment.operationAirline.caption : 
                            props.departureSegment.airline.caption
                        }
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.Flight}>
            <div style={{borderBottom: '3px solid #1E90FF'}}>
                <div style={{
                    width: '100%',
                    padding: '5px 10px'
                }}>
                    {departureCityCaption}, {departureAirportCaption + ' '} 
                    <span style={{color: '#1E90FF'}}>
                        ({departureAirportUid}) 
                        <span style={{fontSize: 26}}>→ </span>
                    </span> 
                    {arrivalCityCaption}, {arrivalAirportCaption + ' '} 
                    <span style={{color: '#1E90FF'}}>({arrivalAirportUid})</span>
                    <hr style={{opacity: .3}}/>
                </div>
                <div className={classes.Time}>
                    <div>
                        <span style={{fontSize: 23}}>
                            {departureDate.getUTCHours()+':' + (departureDate.getUTCMinutes().toString().length === 1 ? departureDate.getUTCMinutes() + '0' : departureDate.getUTCMinutes()) + ' '}
                        </span> 
                        <span style={{fontSize: 18, color: '#1E90FF'}}>
                            {departureDate.getUTCDate()} {departureDate.toLocaleString('ru', { month: 'short' })} {days[departureDate.getUTCDay()]}
                        </span>
                    </div>
                    <div style={{fontSize: 23, margin: '0 auto'}}>
                        ◷ {timeTravel(props.arrivalSegment.travelDuration)}
                    </div>
                    <div>
                        <span style={{fontSize: 18, color: '#1E90FF'}}>
                            {arrivalDate.getUTCDate()} {arrivalDate.toLocaleString('ru', { month: 'short' })} {days[arrivalDate.getUTCDay()] + ' '}
                        </span> 
                        <span style={{fontSize: 23}}>
                            {arrivalDate.getUTCHours() + ':' + (arrivalDate.getUTCMinutes().toString().length === 1 ? arrivalDate.getUTCMinutes() + '0' : arrivalDate.getUTCMinutes())}
                        </span>
                    </div>
                    <br />
                    {
                        props.arrivalSegment.arrivalCity.caption.toLowerCase() === 'париж' ? 
                        <div className={classes.hrSect}>
                            <span style={{color: '#FF8C00'}}>1 пересадка</span>
                        </div> :
                        <div className={classes.hrSect2}>
                            <p></p>
                        </div>
                    }
                </div>
                <div>
                    <p style={{padding: "0px 10px"}}>
                        Рейс выполняет: {
                            props.arrivalSegment.operationAirline !== undefined ? 
                            props.arrivalSegment.operationAirline.caption : 
                            props.arrivalSegment.airline.caption
                        }
                    </p>
                </div>
            </div>
            {props.departureSegment !== undefined ? renderSegments() : null}
        </div>
    )
}


export default Flight