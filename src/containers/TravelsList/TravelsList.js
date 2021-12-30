import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCompany, fetchTravels } from "../../store/actions/travel";
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

    const aviaFilter = () => {
        return props.travels.filter(travel => {
            if (props.avia.value) {
                return travel.caption === props.avia.company
            } else {
                return travel
            }
        })
    }

    const priceFilter = (travels) => {
        return travels.filter(travel => {
            if ((props.min === '' && props.max === '')) {
                return travel
            } else if ((props.min !== '' && props.max !== '')) {
                return travel.passengerPrice > +props.min && travel.passengerPrice < +props.max
            } else if ((props.min !== '' && props.max === '')) {
                return travel.passengerPrice > +props.min
            } else if ((props.min === '' && props.max !== '')) {
                return travel.passengerPrice < +props.max
            }
        })
    }

    const transferFilter = (travels) => {
        return travels.filter(travel => {
            if (!props.oneTransfer && !props.zeroTransfer) {
                return travel
            } 
            else if (props.oneTransfer && props.zeroTransfer) {
                return travel
            }
            else if (props.oneTransfer) {
                return travel.arrivalSegment.arrivalCity.caption.toLowerCase() === 'париж'
            }
            else if (props.zeroTransfer) {
                return travel.arrivalSegment.arrivalCity.caption.toLowerCase() !== 'париж'
            }
        })
    }

    function byField(field) {
        return (a, b) => a[field] - b[field]
    }

    function byReverseField(field) {
        return (a, b) => b[field] - a[field]
    }
      
    const sortFilter = (travels) => {
        if (props.encrement) {
            return travels.sort(byField('passengerPrice'))
        } else if (props.decrement) {
            return travels.sort(byReverseField('passengerPrice'))
        } else if (props.time) {
            return travels.sort((a, b) => {
                return a-b
            })
        } else {
            return travels
        }
    }

    const RenderTravels = (travels) => {
        setTimeout(() => props.fetchCompany(travels.slice(0, counterTravels)), 0) 
        return travels.slice(0, counterTravels).map((travel) => {
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
    }  

    return (
        <div className={classes.TravelsList}>
            {    
                props.loading ? 
                <Loader /> :
                RenderTravels(priceFilter(transferFilter(sortFilter(aviaFilter()))))
            }

            { 
                ((props.travels.length >= counterTravels + 2) && (RenderTravels(priceFilter(transferFilter(sortFilter(aviaFilter())))).length !== 0)) ?
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
        min: state.filters.min,
        max: state.filters.max,
        oneTransfer: state.filters.oneTransfer,
        zeroTransfer: state.filters.zeroTransfer,
        encrement: state.filters.encrement,
        decrement: state.filters.decrement,
        time: state.filters.time,
        avia: state.filters.avia
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTravels: () => dispatch(fetchTravels()),
        fetchCompany: companies => dispatch(fetchCompany(companies))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelsList)