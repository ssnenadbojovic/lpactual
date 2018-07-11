import { connect } from 'react-redux'
import { getNewAction } from '../selectors/newactions'
import { getLenderIdAction } from '../selectors/lenderId'
import { State } from '../reducers'
import LMITable from '../components/Content/LMITable'
const mapStateToProps = (state: State) => ({
  // izostavio si plural
  newactions: getNewAction(state),
  lenderIds: getLenderIdAction(state)
})
export default connect<any, any, any>(mapStateToProps, {
 //  handleSubmit: CreateLender('ts')
})(LMITable)