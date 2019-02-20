import { PolymerElement, html } from './node_modules/@polymer/polymer/polymer-element.js';


class WallletCard extends PolymerElement {

    static get properties(){
      return {
        title: String,
        contentBottom: String,
        shineClass: String,
        inventory: Number,
        cash: Number,
        endowment: Number,
        imbalance: Number
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
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }

          .size-adjusted-card {
            height: 25%;
            width: 100%;
          }
          

        </style>
        <div class="container"> 
          <info-card class="theCard" title="Inventory" currency="" value={{inventory}}>
          </info-card>
          <info-card class="theCard" title="Cash" currency=$ value={{cash}}>
          </info-card>
          <info-card class="theCard" title="Order Imbalance" currency="" value={{imbalance}}>
          </info-card>
          <info-card class="theCard" title="Endowment" currency=$ value={{endowment}}>
          </info-card>
        </div>
        `;
    }
  }  
  
customElements.define('subject-wallet', WallletCard);
