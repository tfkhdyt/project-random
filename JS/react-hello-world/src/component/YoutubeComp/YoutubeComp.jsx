import React from 'react'
import './YoutubeComp.css'

const YoutubeComp = (props) => {
  return (
    <div className='youtube-wrapper'>
      <div className='img-thumb'>
        <img src='http://i3.ytimg.com/vi/J_xEbH8PNos/hqdefault.jpg' alt='thumbnail'/>
      </div>
      <p className='title'>{props.title}</p>
      <p className='desc'>{props.desc}</p>
    </div>
  )
}

YoutubeComp.defaultProps = {
  title: 'Ini Judul Video',
  desc: '0x ditonton, baru saja'
}

export default YoutubeComp