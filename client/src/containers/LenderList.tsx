import { connect } from 'react-redux'
import { getNewAction } from '../selectors/newactions'
import { State } from '../reducers'
import Lender from '../components/Content/Lender'
const mapStateToProps = (state: State) => ({

  LenderInfo: getNewAction(state)
})
export default connect<any, any, any>(mapStateToProps, {
 //  handleSubmit: CreateLender('ts')
})(Lender)