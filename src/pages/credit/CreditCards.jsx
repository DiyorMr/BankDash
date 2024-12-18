import React from "react";
import Card from "../../components/card/Card";
import CreditApex from "./CreditApex";
import "./CreditCards.css";
import { cardSetting, creditList } from "./data";

const CreditCards = () => {
  return (
    <div>
      <h1 className="credit_title">My Cards</h1>
      <div className="row">
        <div className="col-4">
          <Card bg="rgb(15, 100, 255)" color="white" />
        </div>
        <div className="col-4">
          <Card bg="rgb(10, 6, 244)" color="white" />
        </div>
        <div className="col-4">
          <Card bg="white" color="rgb(52, 60, 106)" />
        </div>
        <div className="col-4">
          <div className="invest_info ">
            <h1 className="invest_info_name">Card Expense Statistics</h1>
          </div>
          <div className="chart_invest">
            <div className="credit_card">
              <CreditApex />
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="invest_info ">
            <h1 className="invest_info_name">Card List</h1>
          </div>
          {creditList.map((item, index) => (
            <div className="card_list" key={index}>
              <div className="card_list_type">
                <div className="card_list_img" style={{ background: item.bg }}>
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h4 className="card_list_title">{item.listTitle}</h4>
                  <p className="card_list_name">{item.listName}</p>
                </div>
              </div>
              <div>
                <h4 className="card_bank_title">{item.bankTitle}</h4>
                <p className="card_bank_name">{item.bankName}</p>
              </div>
              <div>
                <h4 className="card_card_title">{item.cardTitle}</h4>
                <p className="card_card_name">{item.cardName}</p>
              </div>
              <div>
                <h4 className="card_main_title">{item.mainTitle}</h4>
                <p className="card_main_name">{item.mainName}</p>
              </div>
              <div>
                <h3 className="card_list_view">{item.view}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="col-8">
          <h1 className="credit_title">Add New Card</h1>
          <div className="card_table">
            <p className="card_table_text">
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>
            <div className="row">
              <div className="col-6">
                <div className="card_type_info">
                  <h3 className="card_input_title">Card Type</h3>
                  <input
                    className="card_input"
                    type="text"
                    placeholder="Classic"
                  />
                </div>
              </div>
              <div className="col-6">
                {" "}
                <div className="card_type_info">
                  <h3 className="card_input_title">Name On Card</h3>
                  <input
                    className="card_input"
                    type="text"
                    placeholder="My Cards"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="card_type_info">
                  <h3 className="card_input_title">Card Number</h3>
                  <input
                    className="card_input"
                    type="text"
                    placeholder="**** **** **** ****"
                  />
                </div>
              </div>
              <div className="col-6">
                {" "}
                <div className="card_type_info">
                  <h3 className="card_input_title">Expiration Date</h3>
                  <input
                    className="card_input"
                    type="datetime-local"
                    placeholder="25 January 2025"
                  />
                </div>
              </div>
            </div>
            <button className="card_btn">Add Card</button>
          </div>
        </div>
        <div className="col-4">
          <h1 className="credit_title">Card Setting</h1>
          <div className="card_setting">
            {cardSetting.map((item, index) => (
              <div className="card_setting_table " key={index}>
                <div
                  className="card_setting_img"
                  style={{ background: item.bg }}
                >
                  <img src={item.photo} alt="" />
                </div>
                <div>
                  <h4 className="card_setting_title">{item.title}</h4>
                  <p className="card_setting_text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
