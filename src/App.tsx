import React from "react";
import styles from "app.module.scss";
// import * as styles from "app.module.scss";
import Routes from "components/Routes";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      {/* メインコンテンツ */}
      <Routes />
    </div>
  );
};

export default App;
