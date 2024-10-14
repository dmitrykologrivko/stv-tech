import { useEffect, useRef } from 'react';

function useStaticMetaTag(metaTag = {}) {
  const metaTagRef = useRef(metaTag);

  useEffect(() => {
    const meta = document.createElement('meta');

    for (const key in metaTagRef.current) {
      meta[key] = metaTagRef.current[key];
    }

    document.getElementsByTagName('head')[0].appendChild(meta);

    return () => {
      document.getElementsByTagName('head')[0].removeChild(meta);
    };
  }, [metaTagRef]);
}

export default useStaticMetaTag;
