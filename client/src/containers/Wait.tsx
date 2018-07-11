import { connect } from 'react-redux'
import { NewAction } from '../actions/todos'
import { getActiveComponents } from '../selectors/activecomponents'
import { State } from '../reducers'
import Wait from '../components/Wait'
const mapStateToProps = (state: State) => ({
  activecomponents: getActiveComponents(state)
})
export default connect<any, any, any>(mapStateToProps, {
  useAction: NewAction
})(Wait)