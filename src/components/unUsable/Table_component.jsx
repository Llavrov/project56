import React from 'react';
import '../../css/unUsable/table-css.css';

function Table_component({array, rows = [], colums}) {

    return (
      <div className="table-container">
        <table className="table-content">
            {rows.map((item, index) => {
                if (index !== rows.length-1){
                    return (
                        <tr>
                            <th> {index}</th>
                            <th> {index}</th>
                            <th> {index}</th>
                            <th> {index}</th>
                            <th> {index}</th>
                            <th> {index}</th>
                        </tr>
                    )
                }
                return (
                    <tr>
                        <th> {index}</th>
                        <th> {index}</th>
                        <th> {index}</th>
                        <th> {index}</th>
                        <th> {index}</th>
                        <th> {index}</th>
                    </tr>
                )
            })}
        </table>
      </div>
    );
}

export default Table_component;