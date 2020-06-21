import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

// react-routerのLinkではないものをクリックしてページ遷移するためにRouteComponentPropsを型として継承させる必要がある
type Props = RouteComponentProps & {
  tab: { category: string; pages: { id: string; name: string }[] };
};

const HoverMenu: React.FC<Props> = props => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handlePopperOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopperClose = () => {
    setAnchorEl(null);
  };

  // ページ遷移
  const handleMovePage = (path: string) => {
    props.history.push("/" + path);
  };

  // マウスオーバー時に出てくるメニュー（各ページ）の作成
  const menuList = props.tab.pages.map((item, idx, ary) => (
    <MenuItem onClick={() => handleMovePage(item.id)} key={idx}>
      {item.name}
    </MenuItem>
  ));

  return (
    <div onMouseEnter={handlePopperOpen} onMouseLeave={handlePopperClose}>
      {/* ヘッダーに常に表示されているタブ */}
      <ListItem
        button
        onClick={handlePopperOpen}
        aria-controls={isOpen ? "menu-list-grow" : undefined}
        aria-haspopup="true"
      >
        {props.tab.category}
      </ListItem>
      {/* マウスオーバー時に出てくるメニュー */}
      <Popper open={isOpen} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handlePopperClose}>
                <MenuList id="menu-list-grow">{menuList}</MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default withRouter(HoverMenu);
