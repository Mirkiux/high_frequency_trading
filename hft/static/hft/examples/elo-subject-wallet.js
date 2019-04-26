import { PolymerElement, html } from '../node_modules/@polymer/polymer/polymer-element.js';
import '../market-primitives/widgets/info-card.js'

class WallletCard extends PolymerElement {

    static get properties(){
      return {
        title: String,
        contentBottom: String,
        shineClass: String,
        inventory: Number,
        cash: Number,
        endowment: Number,
        signedVolume: Number
      };
    }
  
    constructor(){
      super();
    }
  
    static get template() {
      return html`  
        <style>
          :host {
            display: inline-block;
            font-family: monospace;
            width: 100%;
            height: 100%;
          }

          .container {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          .size-adjusted-card {
            height: 25%;
            width: 100%;
          }
          .column{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }
          

        </style>

        <div class="container"> 
          <div class = 'column' >
            <info-card class="theCard" title="Wealth" currency=$ value={{endowment}}>
            </info-card>
            <info-card class="theCard" title="Cash" currency=$ value={{cash}}>
            </info-card>
          </div>
          <div class = 'column'>
            <info-card class="theCard" title="Inventory" currency="" value={{inventory}}>
            </info-card>
            <info-card class="theCard" title="Signed Volume" currency="" value={{signedVolume}}>
            </info-card>
          </div>
     
            
       
        </div>
        `;
    }
  }  
  
customElements.define('elo-subject-wallet', WallletCard);
