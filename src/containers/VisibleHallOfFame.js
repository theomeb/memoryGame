import { connect } from 'react-redux'
import HallOfFame from '../components/HallOfFame'
import { fetchPlayers } from '../Actions'
import React from "react"

class VisibleHallOfFame extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchPlayers());
    }
  
    render() {
      const { error, loading, players } = this.props;
      
      if (error) {
        return <div>Error! {error.message}</div>;
      }
  
      if (loading) {
        return <div>Loading...</div>;
      }
  
      return (
        <ul>
          {players.map(player =>
            <li key={player.id}>{player.name}</li>
          )}
        </ul>
      );
    }
  }


const mapStateToProps = (state) => {
    return {
      players: state.players, 
      error: state.error,
      loading: state.loading
    }
}

// const mapDispatchToProps = () => {
//     return {
      
//       }
// }

// const VisibleHallOfFame = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HallOfFame)

export default connect(mapStateToProps)(VisibleHallOfFame);