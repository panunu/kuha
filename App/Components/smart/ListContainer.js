import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as DataActions from '../../actions/DataActions';

import List from '../List';

export default class ListContainer extends React.Component {
  componentDidMount() {
    const { dataActions } = this.props;

    dataActions.fetchData();
  }

  render() {
    const { fish } = this.props;

    return (
      <List data={fish ? fish : []} onBackButton={() => this.props.navigator.pop()}></List>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      fish: state.data.get('fish')
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      dataActions: bindActionCreators(DataActions, dispatch)
    };
  }
)(ListContainer);
