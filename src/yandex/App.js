import React from 'react';
import { YMaps, withYMaps } from 'react-yandex-maps';
import ConfigPanel from './components/ConfigPanel';
import MapWrapper from './components/MapWrapper';
import geocode from './api/GeoCoder';
import './App.css';

const YMapsMapWrapper = withYMaps(MapWrapper, true, ['geocode']),
    YMapsConfigPanel = withYMaps(ConfigPanel, true, ['geocode']);

export default function App(){
    return (
        <YMaps
            query={{
                apikey: "e8a4651b-e60d-4b66-826b-fb2ac872e951"
            }}
        >
            <div className="app-block config-panel">
                <YMapsConfigPanel
                    geocode={geocode}
                />
            </div>
            <div className="app-block">
                <YMapsMapWrapper
                    geocode={geocode}
                />
            </div>
        </YMaps>
    )
}