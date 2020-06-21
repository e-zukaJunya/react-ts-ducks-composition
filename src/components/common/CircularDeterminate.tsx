import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const CircularDeterminate: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  // サークルが1周したら初めからまた回す非同期処理
  React.useEffect(() => {
    const tick = () => setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress variant="determinate" value={progress} />;
};

export default CircularDeterminate;
