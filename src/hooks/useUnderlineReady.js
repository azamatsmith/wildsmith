import React from 'react';

function useUnderlineReady() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return ready;
}

export default useUnderlineReady;
