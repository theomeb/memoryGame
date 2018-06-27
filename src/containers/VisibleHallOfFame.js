import { connect } from 'react-redux'
import HallOfFame from '../components/HallOfFame'

const mapStateToProps = (state) => {
    return {
      players: state.players
    }
}

const mapDispatchToProps = () => {
    return {
      
      }
}

const VisibleHallOfFame = connect(
    mapStateToProps,
    mapDispatchToProps
)(HallOfFame)

export default VisibleHallOfFame