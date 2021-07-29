import React from "react";
import "./style.css";
import BrandFilter from "../../components/BrandFilter";
import InterestFilter from "../../components/InterestFilter";

class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkedBrand: new Map(), isHidden: false };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleInterestCheckboxChange = this.handleInterestCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    const brand = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prev => ({ checkedBrand: prev.checkedBrand.set(brand, isChecked) }));
  }

  handleInterestCheckboxChange(event) {
    this.setState({ isHidden: event.target.checked });
  }

  render() {
    return (
      <div className="recentList-page">
        <BrandFilter checkedBrand={this.state.checkedBrand} handleCheckboxChange={this.handleCheckboxChange} />
        <InterestFilter handleInterestCheckboxChange={this.handleInterestCheckboxChange} />
      </div>
    );
  }
}

export default RecentListPage;
