import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

type Props = {
  open: boolean;
  onClickClose: () => void;
};

const AlertDialog: React.FC<Props> = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"アラートダイアログ"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{"閉じるだけ"}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClickClose} color="primary" autoFocus>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
