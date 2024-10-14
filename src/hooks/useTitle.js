import { useEffect } from 'react';

function useTitle(title) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    return () => {
      document.title = originalTitle
    };
  }, [title]);
}

export default useTitle;
