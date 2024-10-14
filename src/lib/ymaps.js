import React from 'react';
import ReactDom from 'react-dom';

const [
  ymaps3React
] = await Promise.all([
  ymaps3.import('@yandex/ymaps3-reactify'),
  ymaps3.ready.then(() => {
    ymaps3.import.registerCdn(
      'https://cdn.jsdelivr.net/npm/{package}',
      [
        '@yandex/ymaps3-default-ui-theme@latest',
        '@yandex/ymaps3-clusterer@latest'
      ]
    );
  })
]);

export const reactify = ymaps3React.reactify.bindTo(React, ReactDom);

export const {
  Config,
  ControlContext,
  ThemeContext,
  TypeContext,
  YMap,
  YMapCollection,
  YMapComplexEntity,
  YMapContainer,
  YMapContext,
  YMapContextProvider,
  YMapControl,
  YMapControlButton,
  YMapControlCommonButton,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSatelliteLayer,
  YMapDefaultSchemeLayer,
  YMapEntity,
  YMapFeature,
  YMapFeatureDataSource,
  YMapGroupEntity,
  YMapHotspot,
  YMapLayer,
  YMapListener,
  YMapMarker,
  YMapReactContainer,
  YMapScaleControl,
  YMapTileDataSource,
} = reactify.module(ymaps3);

export const {
  YMapDefaultMarker,
  YMapDefaultRuler,
  YMapGeolocationControl,
  YMapPopupMarker,
  YMapRotateControl,
  YMapRotateTiltControl,
  YMapRouteControl,
  YMapSearchControl,
  YMapTiltControl,
  YMapZoomControl
} = reactify.module(await ymaps3.import('@yandex/ymaps3-default-ui-theme'));

export const {
  YMapClusterer,
  clusterByGrid
} = reactify.module(await ymaps3.import('@yandex/ymaps3-clusterer'));
