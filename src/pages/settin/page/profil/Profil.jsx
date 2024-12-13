import React from "react";
import "./Profil.css";
import profil from "../../../../img/girl.svg";

const Profil = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-3">
          <div className="profil_img">
            <img src={profil} alt="" />
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-6">
              <div className="input_setting_table">
                <h3 className="input_table_title">Your Name</h3>
                <input type="text" placeholder="Charlene Reed " />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">Email</h3>
                <input type="text" placeholder="charlenereed@gmail.com  " />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">Date of Birth</h3>
                <input type="datetime-local" placeholder="25 January 1990  " />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">Permanent Address</h3>
                <input type="text" placeholder="San Jose, California, USA " />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">Postal Code</h3>
                <input type="text" placeholder="45962" />
              </div>
            </div>
            <div className="col-6">
              <div className="input_setting_table">
                <h3 className="input_table_title">User Name</h3>
                <input type="text" placeholder="Charlene Reed " />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">Password</h3>
                <input type="text" placeholder="**********" />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">Present Address</h3>
                <input type="text" placeholder="San Jose, California, USA" />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">City</h3>
                <input type="text" placeholder="San Jose" />
              </div>
              <div className="input_setting_table">
                <h3 className="input_table_title">Country</h3>
                <input type="text" placeholder="USA" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="input_setting_button">
                  <button className="input_setting_btn">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
