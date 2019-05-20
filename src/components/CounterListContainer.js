import CounterList from "../components/CounterList";
import * as actions from "../actions";
import { connect } from "react-redux";
import getRandomColor from "../lib/getRandomColor";

const mapStateToProps = (state) => ({ counters: state.counters });

const mapDispatchToProps = (dispath) => ({
  onIncrement: (index) => dispath(actions.increment(index)),
  onDecrement: (index) => dispath(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispath(actions.setColor({ index, color }));
  }
});

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;
