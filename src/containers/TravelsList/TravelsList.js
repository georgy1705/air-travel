import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTravels } from "../../store/actions/travel";
import classes from "./TravelsList.module.scss"
import Loader from "../../components/UI/Loader/Loader"
import Flight from "../../components/Flight/Flight";

const TravelsList = props => {

    useEffect(() => {
        props.fetchTravels()
    }, [])

    const [counterTravels, setCounterTravels] = useState(2)

    const loadMore = () => {
        setCounterTravels(prev => prev + 2)
    }

    const travels = props.travels.slice(0, counterTravels)


    const renderTravels = () => travels.map((travel) => {
        return (
            <div key={travel.id} className={classes.Travel}>
                <div className={classes.TravelHead}>
                    <span>{travel.caption}</span>
                    <div className={classes.TravelHeadPrice}>
                        <span className={classes.TravelHeadPrice}>{parseInt(travel.passengerPrice)} ₽</span><br />
                        <span style={{float: 'right', fontSize: 16}}>Стоимость для одного взрослого пассажира</span> 
                    </div>
                </div>
                <Flight arrivalSegment={travel.arrivalSegment} departureSegment={travel.departureSegment} />
                <div style={{width: '100%'}}>
                    <button className={classes.btnWrite}>Выбрать</button>
                </div>
            </div>
        )
    })

    return (
        <div className={classes.TravelsList}>
            { 
                props.loading ? 
                <Loader /> : 
                renderTravels()
            }

            { 
                props.travels.length >= counterTravels + 2 ?
                <button className={classes.btnLoad} onClick={loadMore}>Показать еще</button> :
                null
            }
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        travels: state.travel.travels,
        loading: state.travel.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTravels: () => dispatch(fetchTravels())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelsList)