import React from 'react'
import { BrazilMap } from './MapBrazil'
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from 'react-simple-maps'

const Map = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 800
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies
        geography={BrazilMap}
        fill='#2C065D'
        stroke='#FFFFFF'
        strokeWidth={0.5}
      >
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geography: any) => (
            <Geography key={geography.rsmKey as string} geography={geography} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-47.1504664, -22.8924129]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: 'round'
        }}
      >
        <text
          fontSize={30}
          x='-8'
          textAnchor='end'
          alignmentBaseline='middle'
          fill='white'
        >
          {'Campinas - São Paulo'}
        </text>
      </Annotation>
    </ComposableMap>
  )
}

export default Map
