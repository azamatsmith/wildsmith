import React from 'react';
// import PropTypes from 'prop-types';

// Define your ref
// const el = React.useRef(null);
// <section ref={el} />

function useVisible(ref) {
  const [pos, setPos] = React.useState({
    bottom: null,
    scrolledIntoView: false,
    top: null,
  });

  function handleScroll() {
    if (ref && ref.current) {
      const {bottom, top} = ref.current.getBoundingClientRect();
      let scrolledIntoView = pos.scrolledIntoView;
      if (!scrolledIntoView) {
        if (top <= 0) {
          scrolledIntoView = true;
        }
      }
      setPos({bottom, scrolledIntoView, top});
    }
  }

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return pos;
}

export default useVisible;
