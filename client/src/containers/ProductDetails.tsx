import { connect } from 'react-redux'
import { getNewAction } from '../selectors/newactions'
import { getLenderIdAction } from '../selectors/lenderId'
import { State } from '../reducers'
import ProductDetails from '../components/Content/ProductDetails'
const mapStateToProps = (state: State) => ({

  newactions: getNewAction(state),
  lenderId: getLenderIdAction(state)
})
export default connect<any, any, any>(mapStateToProps, {

})(ProductDetails)