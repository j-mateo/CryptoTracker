import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import FetchCoinData from '../actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto, navigation } = this.props;
    console.log('navigation', navigation);
    return crypto.data.map((coin, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('CoinDetails', { ...coin })}
      >
        <CoinCard
          coin_name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          percent_change_24h={coin.percent_change_24h}
          percent_change_7d={coin.percent_change_7d}
        />
      </TouchableOpacity>
    ));
  }

  render() {
    const { crypto } = this.props;
    if (crypto.isFetching)
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={'Loading...'}
            textStyle={{ color: '#253146' }}
            animation="fade"
          />
        </View>
      );

    if (crypto.hasError) return <Text>{crypto.errorMessage}</Text>;

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 10,
    backgroundColor: '#ffffff'
  }
};

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
