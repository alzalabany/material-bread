import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../Theme/withTheme';

class DataTableHeaderItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
    right: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderLeft: PropTypes.bool,
    flex: PropTypes.number,
  };

  render() {
    const {
      children,
      onPress,
      right,
      style,
      borderRight,
      borderLeft,
      flex,
    } = this.props;

    return (
      <TouchableWithoutFeedback disabled={!onPress} onPress={onPress}>
        <View
          style={[
            styles.item,
            {
              flex: flex ? flex : 1,
              justifyContent: right ? 'flex-end' : 'flex-start',
              borderRightWidth: borderRight ? 1 : 0,
              borderLeftWidth: borderLeft ? 1 : 0,
            },
            style,
          ]}>
          <Text style={[styles.text]} numberOfLines={1}>
            {children}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: '100%',
    borderColor: 'rgb(224, 224, 224)',
  },

  text: {
    color: 'rgba(0,0,0,.54)',
    height: 24,
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center',
  },
});

export default withTheme(DataTableHeaderItem);
