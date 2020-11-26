import React from 'react';
import { Link } from 'react-router-dom';

function NewCard(props) {
  return (
    <>
      <div className="property-card">
        <a href="ticket-order/reguler">
          <div className="property-image">
            <div className="property-image-title">
              <img style={{ width: 'inherit' }} src={props.src} />
              {/*-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also.*/}
            </div>
          </div></a>
        <div className="property-description">
          <h5>{props.name}</h5>
          <br />
          <div className="stats-preview">
            <table>
              <tr>
                <td>HP</td>
                <td2>100</td2>
                <td>MP</td>
                <td2>100</td2>
              </tr>
              <tr>
                <td>ATK</td>
                <td2>100</td2>
                <td>DEF</td>
                <td2>100</td2>
              </tr>
              <tr>
                <td>MATK</td>
                <td2>100</td2>
                <td>MDEF</td>
                <td2>100</td2>
              </tr>
              <tr>
                <td>SPD</td>
                <td2>100</td2>
                <td>ACC</td>
                <td2>100</td2>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}

export default NewCard;
