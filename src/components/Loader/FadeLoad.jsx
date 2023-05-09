import { FadeLoader } from "react-spinners";
import classes from "./FadeLoad.module.scss";

const FadeLoad = () => {
  return (
    <div className={classes.wrapper}>
      <FadeLoader color="#FE5F1E" />
    </div>
  );
};

export default FadeLoad;
