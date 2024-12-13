import React from "react";
import "./Accounts.css";
import { account, debit } from "./data";
import notific from "../../img/notif.svg";
import setting from "../../img/setting.svg";
import user from "../../img/userred.svg";
import Card from "../../components/card/Card";
import ChartWeekly2 from "./ChartWeekly2";

const Accounts = () => {
  return (
    <div>
      <div className="row">
        {account.map((item, index) => (
          <div className="col-3">
            <div className="account_cards" key={index}>
              <div className="account_img" style={{ background: item.bg }}>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h3 className="account_title">{item.title}</h3>
                <p className="account_price">{item.price}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="col-8">
          <div className="account_info">
            <h1 className="account_info_name">Last Transaction</h1>
          </div>
          <div className="account_table">
            <div className="account_tables">
              <div className="account_table_img">
                <img src={notific} alt="" />
              </div>
              <div>
                <h1 className="account_table_title">Spotify Subscription</h1>
                <p className="account_table_date">25 Jan 2021</p>
              </div>
              <div>
                <p className="account_table_text">Shopping</p>
              </div>
              <div>
                <p className="account_table_text">1234 ****</p>
              </div>
              <div>
                <p className="account_table_text">Pending</p>
              </div>
              <div>
                <p className="account_table_price">-$150</p>
              </div>
            </div>
            <div className="account_tables">
              <div className="account_table_img2">
                <img src={setting} alt="" />
              </div>
              <div>
                <h1 className="account_table_title">Mobile Service</h1>
                <p className="account_table_date">25 Jan 2021</p>
              </div>
              <div>
                <p className="account_table_text">Service</p>
              </div>
              <div>
                <p className="account_table_text">1234 ****</p>
              </div>
              <div>
                <p className="account_table_text">Completed</p>
              </div>
              <div>
                <p className="account_table_price">-$340</p>
              </div>
            </div>
            <div className="account_tables">
              <div className="account_table_img3">
                <img src={user} alt="" />
              </div>
              <div>
                <h1 className="account_table_title">Emilly Wilson</h1>
                <p className="account_table_date">25 Jan 2021</p>
              </div>
              <div>
                <p className="account_table_text">Transfer</p>
              </div>
              <div>
                <p className="account_table_text">1234 ****</p>
              </div>
              <div>
                <p className="account_table_text">Completed</p>
              </div>
              <div>
                <p className="account_table_price3">+$780</p>
              </div>
            </div>
          </div>

          <div className="account_info">
            <h1 className="account_debit_title">Debit & Credit Overview</h1>
          </div>
          <div className="chart_card2">
            <ChartWeekly2 />
          </div>
        </div>
        <div className="col-4">
          <div className="account_info">
            <h1 className="account_info_name">My Card</h1>
            <h1 className="account_info_name2">See All</h1>
          </div>
          <div className="account_cardclone">
            <Card bg="rgb(45, 96, 255)" color="white" />
          </div>
          <div className="account_info">
            <h1 className="account_debit_title">Invoices Sent</h1>
          </div>
          <div className="account_debit">
            {debit.map((item, index) => (
              <div className="account_debit_info" key={index}>
                <div className="d-flex align-items-center gap-4">
                  <div
                    className="account_sent_img"
                    style={{ background: item.bg }}
                  >
                    <img src={item.image} alt="" />
                  </div>
                  <div className="account_apple">
                    <h1 className="account_sent_title">{item.title}</h1>
                    <p className="account_sent_date">{item.date}</p>
                  </div>
                </div>
                <p className="account_sent_price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
