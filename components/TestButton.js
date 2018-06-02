import React, { Component } from 'react'
import { Text } from 'react-native'
import { MKButton, MKColor } from 'react-native-material-kit'

class TestButton extends Component {
  render() {
    const { caption } = this.props

    return (
      <MKButton
        backgroundColor={MKColor.Teal}
        shadowRadius={2}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.7}
        shadowColor="black"
        onPress={() => {
          console.log('hi, raised button!')
        }}
      >
        <Text
          pointerEvents="none"
          style={{ color: 'white', fontWeight: 'bold', padding: 10 }}
        >
          {caption}
        </Text>
      </MKButton>
    )
  }
}

export default TestButton
