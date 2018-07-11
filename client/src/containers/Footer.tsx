import { connect } from 'react-redux'
import { NewAction } from '../actions/todos'
import { Refresh } from '../actions/todos'
import { getActiveComponents } from '../selectors/activecomponents'

import { getLenderIdAction } from '../selectors/lenderId'
import { State } from '../reducers'
import Footer from '../components/Footer'
const mapStateToProps = (state: State) => ({
  activecomponents: getActiveComponents(state),
  idLenders: getLenderIdAction(state)
})
export default connect<any, any, any>(mapStateToProps, {
  useAction: NewAction,
  refreshScreen: Refresh,

})(Footer)