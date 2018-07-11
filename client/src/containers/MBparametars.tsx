import { connect } from 'react-redux'
import { getNewAction } from '../selectors/newactions'
import { getLenderIdAction } from '../selectors/lenderId'
import { State } from '../reducers'
import {MBParametars} from '../components/Content/MBParametars'
const mapStateToProps = (state: State) => ({
  // izostavio si plural
  newactions: getNewAction(state),
  lenderId: getLenderIdAction(state)
})
export default connect<any, any, any>(mapStateToProps, {
 //  handleSubmit: CreateLender('ts')
})(MBParametars)