import { Component } from "react";
import "./search-box-styles.css";

class SeacrchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <input
        className="search--box"
        type="search"
        placeholder="search pizza"
        onChange={onChangeHandler}
      />
    );
  }
}

export default SeacrchBox;
