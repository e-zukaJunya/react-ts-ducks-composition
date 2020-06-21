import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";

type Props = {
  open: boolean;
  onClickOk: () => void;
  onClickNo: () => void;
};

const ConfirmDialog: React.FC<Props> = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClickNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"確認ダイアログ"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{"確認ダイアログ"}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClickNo} color="primary" autoFocus>
            いいえ
          </Button>
          <Button onClick={props.onClickOk} color="primary">
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
