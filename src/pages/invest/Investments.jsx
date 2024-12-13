import React from "react";
import Balance from "../dashboard/components/Balance";
import { invest, myInvest, trending } from "./data";
import "./Investments.css";
import Yearly from "./Yearly";

const Investments = () => {
  return (
    <div className="row">
      {invest.map((item, index) => (
        <div className="col-4">
          <div className="invest_cards" key={index}>
            <div className="invest_img" style={{ background: item.bg }}>
              <img src={item.img} alt="" />
            </div>
            <div>
              <h3 className="invest_title">{item.title}</h3>
              <p className="invest_price">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="col-7">
        <div className="invest_info ">
          <h1 className="invest_info_name">Yearly Total Investment</h1>
        </div>
        <div className="invest_card">
          <Yearly />
        </div>
      </div>
      <div className="col-5">
        <div className="invest_info ">
          <h1 className="invest_info_name">Monthly Revenue</h1>
        </div>
        <div className="invest_card">
          <Balance />
        </div>
      </div>
      <div className="col-8">
        <div className="invest_info ">
          <h1 className="invest_info_name">My Investment</h1>
        </div>
        <div className="chart_invest">
          {myInvest.map((item, index) => (
            <div className="invest_table" key={index}>
              <div className="invest_tables">
                <div className="d-flex align-items-center gap-4">
                  <div
                    className="invest_table_img"
                    style={{ background: item.bg }}
                  >
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <h1 className="invest_table_title">{item.name}</h1>
                    <p className="invest_table_text">{item.text}</p>
                  </div>
                </div>
                <div>
                  <h1 className="invest_table_price">{item.price}</h1>
                  <p className="invest_table_price_text">{item.title}</p>
                </div>
                <div>
                  <h1 className="invest_table_number">{item.number}</h1>
                  <p className="invest_table_number_text">{item.numbertext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-4">
        <div className="invest_info ">
          <h1 className="invest_info_name">Trending Stock</h1>
        </div>
        <div className="invest_card">
          <div className="trending">
            <div className="trending_info">
              <div>
                <h3 className="treding_info_title">SL No</h3>
              </div>
              <div>
                <h3 className="treding_info_title">Name</h3>
              </div>
              <div>
                <h3 className="treding_info_title">Price</h3>
              </div>
              <div>
                <h3 className="treding_info_title">Return</h3>
              </div>
            </div>
            <hr />
            {trending.map((item, index) => (
              <div className="trending_info_table" key={index}>
                <div>
                  <h3 className="treding_info_number">{item.number}</h3>
                </div>
                <div>
                  <h3 className="treding_info_name">{item.name}</h3>
                </div>
                <div>
                  <h3 className="treding_info_price">{item.price}</h3>
                </div>
                <div>
                  <h3
                    className="treding_info_return"
                    style={{ color: item.color }}
                  >
                    {item.return}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
