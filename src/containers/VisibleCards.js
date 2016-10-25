import { connect } from 'react-redux'
import CardList from '../components/CardList'
import { updateSelection } from '../actions'

import getVisibleMountains from '../helpers/getVisibleMountains'
import mountains from '../data/mountains'

const mapStateToProps = (state) => {
  return {
    mountains: getVisibleMountains(
      mountains,
      state.search.query,
      state.search.filters
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelection: (key, position, showInfoWindow) => {
      dispatch(updateSelection(key, position, showInfoWindow))
    }
  }
}

const VisibleCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default VisibleCards
