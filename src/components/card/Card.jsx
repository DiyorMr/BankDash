import React from 'react'
import './Card.css'
import chip from '../../img/chipcard1.svg'
import chip2 from '../../img/chipcard2.svg'
import master from '../../img/mastericon.svg'
import master2 from '../../img/mastericon2.svg'

const Card = ({ bg, color }) => {
    return (
        <div className='card_component' style={{ backgroundColor: bg }}>
            <div className="card_component_header">
                <div className="card_component_price">
                    <p style={{ color: color }}>Balance</p>
                    <p style={{ color: color }}>$5.756</p>
                </div>
                <div className="card_component_chip">
                    <img src={bg === 'white' ? chip2 : chip} alt="" srcset="" />
                </div>
            </div>
            <div className="card_component_body">
                <div className="card_component_name">
                    <p style={{ color: color }}>CARD HOLDER</p>
                    <p style={{ color: color }}> Eddy Cusuma</p>
                </div>
                <div className="card_component_valid">
                    <p style={{ color: color }}>VALID THRU</p>
                    <p style={{ color: color }}>12/22</p>
                </div>
            </div>
            <div className="card_component_footer">
                <p className="card_component_number" style={{ color: color }}>
                    3778 **** **** 1234
                </p>
                <img src={bg === 'white' ? master2 : master} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Card
