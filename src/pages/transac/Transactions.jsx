import React, { useState } from "react";
import "./Transactions.css";
import MyExpence from "./MyExpence";
import Card from "../../components/card/Card";
import { Tabs, Table } from "antd";
import { dataSource, items } from "./data";

const Transactions = () => {
  const [data, setData] = useState(dataSource);

  const onChange = (key) => {
    switch (key) {
      case "income":
        setData(dataSource.filter((item) => item.status === "income"));
        break;

      case "expense":
        setData(dataSource.filter((item) => item.status === "expense"));
        break;

      default:
        setData(dataSource);
        break;
    }
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      render: (description, record) =>
        record.status === "expense" ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-circle me-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
              />
            </svg>
            {description}
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-circle me-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
              />
            </svg>
            {description}
          </span>
        ),
      key: "description",
    },
    {
      title: "Transaction ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: "Card",
      dataIndex: "card",
      key: "card",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      key: "amount",
      title: "Amount",
      dataIndex: "amount",
      align: "center",
      render: (amount) =>
        amount.startsWith("-") ? (
          <span className="text-danger fw-bold">{amount}</span>
        ) : (
          <span className="text-success fw-bold">{amount}</span>
        ),
    },
    {
      title: "Receipt",
      dataIndex: "receipt",
      render: (receipt) => (
        <a href={receipt} target="_blank">
          <button className="btn btn-sm btn-outline-primary">Download</button>
        </a>
      ),
      key: "receipt",
      align: "center",
    },
  ];
  return (
    <div className="transactions">
      <div className="transactions_navbar">
        <div>
          <h1 className="transactions_title">My Cards</h1>
        </div>
        <div className="transactions_info">
          <h1 className="transactions_info_all">+ Add Card</h1>
          <h1 className="transactions_info_title">My Expense</h1>
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
          <div className="transactions_card_info">
            <div className="chart-card">
              <MyExpence />
            </div>
          </div>
        </div>


      </div>


      
      <h1 className="transaction_recent">Recent Transactions.</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <div className="card position-relative" style={{ border: "none", overflow: "hidden" }}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{
            total: data.length,
            showTotal: (total) => `Total: ${total}`,
          }}
        />
      </div>
    </div>
  );
};

export default Transactions;
