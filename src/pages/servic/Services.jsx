import React from "react";
import { service, serviceTable } from "./data";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="row">
        {service.map((item, index) => (
          <div className="col-4">
            <div className="service_cards" key={index}>
              <div className="service_img" style={{ background: item.bg }}>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h3 className="service_title">{item.title}</h3>
                <p className="service_price">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="service_name">Bank Services List</h1>
      <div className="bank_cards">
        {serviceTable.map((item, index) => (
          <div className="bank_card">
            <div className="bank_card_info">
              <div className="bank_card_img" style={{ background: item.bg }}>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h1 className="bank_card_title1">{item.title1}</h1>
                <p className="bank_card_text1">{item.text1}</p>
              </div>
            </div>
            <div>
              <h1 className="bank_card_title">{item.title}</h1>
              <p className="bank_card_text">{item.text}</p>
            </div>
            <div>
              <h1 className="bank_card_title">{item.title}</h1>
              <p className="bank_card_text">{item.text}</p>
            </div>
            <div>
              <h1 className="bank_card_title">{item.title}</h1>
              <p className="bank_card_text">{item.text}</p>
            </div>
            <div>
              <button className="bank_card_btn">{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
