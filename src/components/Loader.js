import React from 'react'
import { CircleLoader } from 'react-awesome-loaders'

const Loader = () => {
  return (
    <div className='load'>
      <CircleLoader
        className='loaderr'
        meshColor={'#6366F1'}
        lightColor={'#E0E7FF'}
        duration={3}
        desktopSize={'90px'}
        mobileSize={'64px'}
      />
    </div>
  )
}

export default Loader
