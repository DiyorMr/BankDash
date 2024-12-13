import { Table } from "antd";
import React, { useState } from "react";
import { USDollar } from "../../helpers";
import { loans, loansTableData } from "./data";
import "./Loans.css";

const Loans = () => {
  const [data, setData] = useState(loansTableData);

  const columns = [
    {
      title: "SL No",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (id) => <span>{id}.</span>,
    },
    {
      title: "Loan Money",
      dataIndex: "loan",
      key: "loan",
      align: "center",
      render: (loan) => <span>{USDollar.format(loan)}</span>,
    },
    {
      title: "Left to repay",
      dataIndex: "left_repay",
      key: "left_repay",
      align: "center",
      render: (left_repay) => <span>{USDollar.format(left_repay)}</span>,
    },
    {
      title: "Duration",
      dataIndex: "month",
      key: "month",
      align: "center",
      render: (month) => <span>{month} Months</span>,
    },
    {
      title: "Interest rate",
      dataIndex: "percent",
      key: "percent",
      align: "center",
      render: (percent) => <span>{percent} %</span>,
    },
    {
      title: "Installment",
      key: "installment",
      dataIndex: "installment",
      align: "center",
      render: (installment) => (
        <span>{USDollar.format(installment)} / month</span>
      ),
    },
    {
      title: "Repay",
      dataIndex: "receipt",
      key: "receipt",
      align: "center",
      render: (receipt) => (
        <a href={receipt} target="_blank">
          <button className="btn btn-sm btn-outline-primary">Repay</button>
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="row">
        {loans.map((item, index) => (
          <div className="col-3 ">
            <div className="loans_cards" key={index}>
              <div className="loans_img" style={{ background: item.bg }}>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h3 className="loans_title">{item.title}</h3>
                <p className="loans_price">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="loans_active">Active Loans Overview</h1>

      <div className="card p-0" style={{ border: "none", overflow: "hidden" }}>
        <Table dataSource={data} columns={columns} pagination={false} />
      </div>
    </>
  );
};

export default Loans;
