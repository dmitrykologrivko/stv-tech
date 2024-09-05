import { useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    return () => {
      document.title = originalTitle
    };
    // Empty dependency array ensures this runs only once on mount
    // eslint-disable-next-line
  }, []);
}

export default useTitle;
