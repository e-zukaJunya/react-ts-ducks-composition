import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import HoverMenu from "./HoverMenu";
import AccountMenu from "./AccountMenu";

const GlobalHeader: React.FC = (props: any) => {
  // ドロワーの開閉ステート
  const [open, setOpen] = React.useState(true);

  // タブ（ページ）要素の構築
  const tabs = props.tabs.map((item: any, idx: number, ary: []) => <HoverMenu tab={item} key={idx} />);

  // タブ用アンカー
  return (
    <div className="">
      <AppBar position="relative">
        <Toolbar>
          {/* ハンバーガーメニュー */}
          {/* <IconButton edge="start" className={""} color="inherit" aria-label="menu" onClick={() => setOpen(!open)}> */}
          <IconButton edge="start" className={""} color="inherit" aria-label="menu" onClick={() => props.getMaster()}>
            <MenuIcon />
          </IconButton>
          {/* タイトル */}
          <Typography variant="h6" className={""}>
            管理ツール
          </Typography>
          {/* タブ */}
          {tabs}
          {/* アカウントボタン */}
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default GlobalHeader;
