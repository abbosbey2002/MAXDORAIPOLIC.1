import { React } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../../public/styles/cards/cardMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardMenu = () => {
  return (
    <div>
      <section className="container mx-auto mb-5">
        <div className="row">
          <div className="ag-format-container col-12 mx-0 px-0">
            <div className="ag-courses_box" style={{ gap: "45px" }}>
              <div className="ag-courses_item m-0">
                <Link className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Osago</div>

                  <NavLink to={"osago"}>
                    <span className="ag-courses-item_date flex items-center z-10 relative">
                      Boshlash
                      <i className="fa-solid fa-arrow-right-long ms-3"></i>
                    </span>
                  </NavLink>
                </Link>
              </div>

              <div className="ag-courses_item m-0">
                <Link className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Baxtsiz hodisa</div>
                  <span className="comming-soon--span">Tez kunda!</span>
                  <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date flex items-center">
                      Boshlash
                      <i className="fa-solid fa-arrow-right-long ms-3"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardMenu;
