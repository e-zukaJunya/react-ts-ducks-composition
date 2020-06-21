import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
// import { getMaster } from "../../modules/common";
import { rootReducer } from "../../store";
import GlobalHeader from "./GlobalHeader";

const mapStateToProps = (state: ReturnType<typeof rootReducer>) => {
  return {
    tabs: state.common.tabs
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
  return {
    // getMaster: () => dispatch(getMaster())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
