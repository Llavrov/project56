import React from 'react';
import Table_component from "./Table_component";
import "../css/home-css.css"

function Home() {
    let array = [1, 2, 3, 4, 5];
    return (
      <div className='Home-container'>
          <div className="warning-massege"></div>
          <div className="left-menu"></div>
          <div className="table_way">
              <div className="pagination">
                  <a href="#">hub1-page > next-page > last-page</a>
              </div>
              <Table_component rows={array}/>
          </div>
      </div>
    );
}

export default Home;