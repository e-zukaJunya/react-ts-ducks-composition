import { Color } from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { hideSnackBar, showSnackBar } from "../../modules/common";
import { rootReducer } from "../../store";
// import AlertSnackbar from "./AlertSnackbar";

// const mapStateToProps = (state: ReturnType<typeof rootReducer>) => {
//   return {
//     severity: state.common.snackBarSeverity,
//     open: state.common.showSnackBar
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
//   return {
//     showSnackBar: (severity: Color) => dispatch(showSnackBar(severity)),
//     hideSnackBar: () => dispatch(hideSnackBar())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AlertSnackbar);

// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = ReturnType<typeof mapDispatchToProps>;
// export type Props = StateProps & DispatchProps;
