import React, {Component} from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Header.css';

class Header extends Component {

  render() {
    return (
        <header>
          <Slider
              min={1}
              max={8}
              dots={true}
              defaultValue={1}
              marks={ {1: "Off", 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: "8+"} }
              onChange={this.props.onChange}
          />
          <div className="logo">
            <img src="img/cube.png" alt=""/>
            <div className="title">Board Games</div>
          </div>
        </header>
    );
  }
}

export default Header;
