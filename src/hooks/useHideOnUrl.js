import { useLocation } from "react-router-dom";

const useHideOnUrl = (path = []) => {
  const { pathname } = useLocation();

  let hide = false;
  path.find((url) => {
    if (pathname.split("/")[1] === url) {
      hide = true;
    }
  });
  return hide;
};

export default useHideOnUrl;
