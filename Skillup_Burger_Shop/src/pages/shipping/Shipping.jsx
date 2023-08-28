import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Détails de la livraison</h1>
        <form>
          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Saisissez votre adresse" />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" placeholder="Saisissez la ville" />
          </div>
          <div>

              {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>Pays</label>
            <select>
              <option value="">France</option>
              {Country && Country.getAllCountries().map((i) => (
                <option value="{i.isoCode}" key="{i.isoCode}">
                  {i.name}
                   {/* Enter the code here for country dropdown */}
                  </option>
                ))}
            </select>
          </div>
          <div> {/* Add the code for the STATE DROPDOWN*/}
            <label>État/Région</label>
            <select>
                  <option value="">État/Région</option>
                  {State && State.getStatesOfCountry("FR").map((i) => (
                    <option value="{i.isoCode}" key="{i.isoCode}">
                      {i.name}
                    </option>
                     ))}
              </select>
          </div>

          <div>
            <label>Code Postal</label>
            <input type="number" placeholder="Saisissez votre code postal" />
          </div>
        
        <div>
          <label>N° de téléphone</label>
          <input type="number" placeholder="Saisissez votre numéro" />
        </div>

          <Popup trigger={
            <Link className="link" to="/myorders">Confirmer la commande</Link>
          }>
                {/* //{<button type = "button">Valider votre commande</button>}
                //</form>position="right center"> */}
                <div style=
                {{color:"red",
                 transform: 'translate(0% - 500%)',
                 backgroundColor: '#fff',
                 padding: '10px',
                 borderRadius: '5px',
                 boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Votre commande est en cours de traitement</div>

            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
