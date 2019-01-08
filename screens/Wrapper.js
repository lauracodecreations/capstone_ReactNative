import React, { Component } from 'react';
import { View} from 'react-native';
import ProductList from './ProductList';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      items: []
    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
    console.log('searching ');
    fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=041554434866`)
    .then(function(response) {
      return response.json()
    }).then((json) => {
      console.log(json);
      this.setState({
        items: json,
        pageToshow: ProductList,
      })
      console.log(this.state);
    })
  }

  render() {
    return (
      <View>
      {this.state.pageToshow == ProductList && (
        <View>
        <ProductList
        agencies={this.state.items}
        />
        </View>
      )}
      </View>
    )
    }
}
export default Wrapper;
