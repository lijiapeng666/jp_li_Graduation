import React, { memo, useMemo } from 'react';
import URI from 'urijs';
import PropTypes from 'prop-types';
import './css/List.css';
import '../common/iconfont/font_1632140_gaesh7xfsli/iconfont.css'
const ListItem = memo(function ListItem(props) {
    const {
        dTime,
        aTime,
        dStation,
        aStation,
        trainNumber,
        date,
        time,
        priceMsg,
        dayAfter,
    } = props;

    const url = useMemo(() => {
        return new URI('ticket.html')
            .setSearch('aStation', aStation)
            .setSearch('dStation', dStation)
            .setSearch('trainNumber', trainNumber)
            .setSearch('date', date)
            .toString();
    }, [aStation, dStation, trainNumber, date]);

    return (
        <li className="list-item">
            <a href={url}>
                <span className="item-time">
                    <em style={{color:"#3480e2",fontSize:18 }} >{dTime}</em>
                    <br />
                    <em style={{fontSize:10}} >
                        {dStation}
                    </em>
                    <br/>
                    <em style={{fontSize:9,color:"#999"}} >
                        硬座:6张
                    </em>
                    {/* <em className="em-light">
                        {aTime} <i className="time-after">{dayAfter}</i>
                    </em> */}
                </span>
                <span className="item-train">
                    <em className="em-light">{time}</em>
                    <br />
                    <div style={{display:"flex",alignItems:"center",height:2.5,justifyContent:"center"}} >
                         <div style={{height:1,width:70,background:"#666"}} >

                         </div>

                    </div>
                   
                    <em>{trainNumber}</em>
                    <br/>
                    <em style={{fontSize:9,color:"#999"}} >
                        硬卧:6张
                    </em>
                    
                </span>
                <span className="item-stations">
                    <em className="em-light" style={{color:"black",fontSize:18 }} >
                        {aTime} <i className="time-after">{dayAfter}</i>
                    </em>
                    <br />
                    <em className="em-light" style={{fontSize:10}} >
                        {aStation}
                    </em>
                    <br/>
                    <em style={{fontSize:9,color:"#999"}} >
                        软卧:6张
                    </em>
                </span>
                
                <span className="item-ticket">
                    <em>{priceMsg}</em>
                </span>
            </a>
        </li>
    );
});

ListItem.propTypes = {
    dTime: PropTypes.string.isRequired,
    aTime: PropTypes.string.isRequired,
    dStation: PropTypes.string.isRequired,
    aStation: PropTypes.string.isRequired,
    trainNumber: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    priceMsg: PropTypes.string.isRequired,
    dayAfter: PropTypes.string.isRequired,
};

const List = memo(function List(props) {
    const { list } = props;

    return (
        <ul className="list">
            {list.map(item => (
                <ListItem {...item} key={item.trainNumber} />
            ))}
        </ul>
    );
});

List.propTypes = {
    list: PropTypes.array.isRequired,
};

export default List;
