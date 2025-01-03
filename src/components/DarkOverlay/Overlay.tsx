import { OverlayStyle } from "./OverlayStyles";
import { selectFocus } from "../../pages/webSlice";
import { useSelector } from "react-redux";

function Overlay() {
  const isActive = useSelector(selectFocus);

  return <OverlayStyle isActive={isActive}></OverlayStyle>;
}

export default Overlay;
