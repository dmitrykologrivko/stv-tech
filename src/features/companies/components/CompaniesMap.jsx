import { useState, useMemo, useRef, memo } from 'react';
import {
  clusterByGrid,
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapControls,
  YMapZoomControl,
  YMapClusterer
} from '../../../lib/ymaps.js';
import useAvailableHeight from '../../../hooks/available-height/useAvailableHeight.js';
import CompanyMapMarker from './CompanyMapMarker.jsx';
import CompaniesMapMarker from './CompaniesMapMarker.jsx';

const CompaniesMap = memo(function CompaniesMap({ cityLocation, companies }) {
  const [activePopupId, setActivePopupId] = useState();

  const gridSizedMethod = useMemo(() => clusterByGrid({ gridSize: 64 }), []);
  const mapLocation = useMemo(() => ({ center: cityLocation, zoom: 12 }), [cityLocation]);
  const marker = (feature) => (
    <CompanyMapMarker feature={feature}
                      activePopupId={activePopupId}
                      onClick={() => setActivePopupId(feature.id)}
                      onCloseClick={() => setActivePopupId(undefined)}/>
  );

  const cluster = (coordinates, features) => (
    <CompaniesMapMarker coordinates={coordinates} features={features}/>
  );

  const mapRef = useRef();
  const availableHeight = useAvailableHeight(mapRef);

  return (
    <div ref={mapRef}
         className={`'w-full rounded-lg overflow-hidden shadow'`}
         style={{ height: availableHeight }}>
      <YMap location={mapLocation}>
        {/* Add a map scheme layer */}
        <YMapDefaultSchemeLayer/>
        {/* Add a layer of geo objects to display the markers */}
        <YMapDefaultFeaturesLayer/>

        <YMapControls position='right'>
          <YMapZoomControl/>
        </YMapControls>

        <YMapClusterer marker={marker}
                       cluster={cluster}
                       method={gridSizedMethod}
                       features={companies}/>
      </YMap>
    </div>
  );
});

export default CompaniesMap;
