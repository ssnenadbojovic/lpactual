import { connect } from 'react-redux'
// import { getLenders } from '../selectors/activecomponents'
import { State } from '../reducers'
import Header from '../components/Header'
const mapStateToProps = (state: State) => ({
//  mytests: getLenders(state)
})
export default connect<any, any, any>(mapStateToProps, {
 //  handleSubmit: 
})(Header)