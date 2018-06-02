import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MKTextField, MKColor } from 'react-native-material-kit'

class TestTextField extends Component {
  render() {
    const { value, someAction } = this.props

    return (
      <MKTextField
        tintColor={MKColor.Lime}
        textInputStyle={{ color: MKColor.Orange }}
        placeholder="Text…"
        value={value}
        style={{ width: 140, height: 30, marginBottom: 10 }}
        onChangeText={someAction}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.persist.testTextValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    someAction: () =>
      dispatch({
        type: 'SOME_ACTION',
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTextField)
