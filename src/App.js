import React, { Component } from "react";
import jediImg from "./images/jediImg.jpg"

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
      <h4>Starwars</h4>
     <CharacterListView />
     <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiE7Oeo--nhAhVoiOAKHaMNAPMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.sideshow.com%2Fcollectibles%2Fstar-wars-darth-maul-hot-toys-903853&psig=AOvVaw3SjsVKldSUFECs9OWYu3Wj&ust=1556237637112032" />
     <img src="https://cdn11.bigcommerce.com/s-coxd9/images/stencil/400x400/products/113753/473325/graves_full_titanium_exhaust_2017_gsxr_1000__00590.1508358549.jpg?c=2&imbypass=on" />
     <p><jediImg /></p>
     </div>
    );
  }
}

export default App;
