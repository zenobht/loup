import { connect } from 'react-redux'
import Gallery from '../components/Gallery'
import { fetchRecipiesAsync } from '../actions/actions'

const mapStateToProps = ({ recipes }) => ({ recipes })

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(fetchRecipiesAsync()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
