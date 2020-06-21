import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { forwardRef } from "react";
// import { Props } from "./SlideSnackbarCont";

// const Alert = (props: AlertProps) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

// const AlertSnackbar: React.FC<Props> = props => {
//   return (
//     <div>
//       <Button onClick={() => props.showSnackBar("error")}>スナックバーテスト</Button>
//       <Snackbar open={props.open} autoHideDuration={3000}>
//         <Alert onClose={props.hideSnackBar} severity={props.severity}>
//           This is a {props.severity} message!
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default AlertSnackbar;
