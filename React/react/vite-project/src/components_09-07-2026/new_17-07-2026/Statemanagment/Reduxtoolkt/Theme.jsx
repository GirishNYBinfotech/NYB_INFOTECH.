import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./ThemeSlice";

function Theme() {
  const mode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <>
      <h2>{mode}</h2>
      <button onClick={() => dispatch(toggleTheme())}>Change Theme</button>
    </>
  );
}

export default Theme;