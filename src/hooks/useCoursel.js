import { useRef } from "react";

function useCoursel() {
  const ref = useRef();

  const scrollBy = (direction) => {
    const elem = ref.current;
    const scrollLeft = elem.scrollLeft;
    const scrollWidth = elem.scrollWidth;
    const value = direction * elem.clientWidth;
    if (scrollLeft >= scrollWidth - value) {
      elem.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      elem.scrollBy({ left: value, top: 0, behavior: "smooth" });
    }
  };

  const next = () => scrollBy(-1);
  const prev = () => scrollBy(1);
  return { ref, next, prev };
}

export default useCoursel;
