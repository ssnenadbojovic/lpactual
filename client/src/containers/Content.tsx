import { connect } from 'react-redux'
import { activeComponent, LenderID } from '../actions/todos'
import { getNewAction } from '../selectors/newactions'
import { getRefreshAction } from '../selectors/refresh'
import { NewAction } from '../actions/todos'
// import { getLenders } from '../selectors/activecomponents'
import { State } from '../reducers'
import Content from '../components/Content'
const mapStateToProps = (state: State) => ({
  newactions: getNewAction(state),
  refreshScreen: getRefreshAction(state)

})
export default connect<any, any, any>(mapStateToProps, {
  handleSubmit: activeComponent,
  handleSubmit2: LenderID,
  useAction: NewAction
})(Content)