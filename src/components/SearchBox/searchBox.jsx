import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder} // for code reusabilty. Use similar way for classname if you want to use searchbox elsewhere with different styling
        type="search"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
