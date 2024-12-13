import React from "react";
import "./Dashboard.css";
import cardimg from "../../img/icon1.svg";
import cardimg2 from "../../img/icon2.svg";
import cardimg3 from "../../img/icon3.svg";
import ChartWeekly from "./components/chartWeekly";
import Expence from "./components/Expence";
import quic1 from "../../img/quic1.svg";
import quic2 from "../../img/quic2.svg";
import quic3 from "../../img/quic3.svg";
import send from "../../img/send.svg";
import Balance from "./components/Balance";
import Card from "../../components/card/Card";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_navbar">
        <div>
          <h1 className="dashboard_title">My Cards</h1>
        </div>
        <div className="dashboard_info">
          <h1 className="dashboard_info_all">See All</h1>
          <h1 className="dashboard_info_title">Recent Transaction</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <Card bg="rgb(10, 6, 244)" color="white" />
        </div>

        <div className="col-4">
          <Card bg="white" color="rgb(52, 60, 106)" />
        </div>
        <div className="col-4">
          <div className="dashboard_card_info">
            <div className="card_info_deposit">
              <div className="card_img">
                <img src={cardimg} alt="" />
              </div>
              <div className="card_info">
                <div>
                  <h1 className="card_info_deposit_name">
                    Deposit from my Card
                  </h1>
                  <p className="card_info_deposit_date">28 January 2021</p>
                </div>
                <div>
                  <p className="card_info_deposit_price">-$850</p>
                </div>
              </div>
            </div>
            <div className="card_info_deposit">
              <div className="card_img2">
                <img src={cardimg2} alt="" />
              </div>
              <div className="card_info">
                <div>
                  <h1 className="card_info_deposit_name">Deposit Paypal </h1>
                  <p className="card_info_deposit_date">25 January 2021</p>
                </div>
                <div>
                  <p className="card_info_deposit_price2">+$2,500</p>
                </div>
              </div>
            </div>
            <div className="card_info_deposit">
              <div className="card_img3">
                <img src={cardimg3} alt="" />
              </div>
              <div className="card_info">
                <div>
                  <h1 className="card_info_deposit_name">Jemi Wilson</h1>
                  <p className="card_info_deposit_date">21 January 2021</p>
                </div>
                <div>
                  <p className="card_info_deposit_price3">+$5,400</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard_progress">
        <div className="dashboard_progress_info">
          <div>
            <h1 className="progress_info_title">Weekly Activity</h1>
          </div>
          <div>
            <h1 className="progress_info_title">Expense Statistics</h1>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-7">
          <div className="chart_card">
            <ChartWeekly />
          </div>
        </div>
        <div className="col-md-5">
          <div className="chart_card">
            <Expence />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <h2 className="dash_title">Quick Transfer</h2>
          <div className="chart_card">
            <div className="quic_cards">
              <div className="quic_top">
                <div className="quic_card">
                  <img src={quic1} alt="" />
                  <h3 className="quic_title">Livia Bator</h3>
                  <p className="quic_text">CEO</p>
                </div>
                <div className="quic_card">
                  <img src={quic2} alt="" />
                  <h3 className="quic_title">Randy Press</h3>
                  <p className="quic_text">Director</p>
                </div>
                <div className="quic_card">
                  <img src={quic3} alt="" />
                  <h3 className="quic_title">Workman</h3>
                  <p className="quic_text">Designer</p>
                </div>
              </div>
              <div className="quic_send">
                <div>
                  <h3 className="quic_send_title">Write Amount</h3>
                </div>
                <div className="quic_send_info">
                  <div className="quic_send_tranc">
                    <div>
                      <h3 className="quic_price">525.50</h3>
                    </div>
                    <div className="quic_send_icon">
                      <p className="quic_send_name">Send</p>
                      <img src={send} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <h2 className="dash_title">Balance History</h2>
          <div className="chart_card">
            <Balance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
