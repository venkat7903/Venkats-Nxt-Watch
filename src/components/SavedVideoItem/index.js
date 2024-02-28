import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../Context/ThemeContext'

import {SavedVideoContainer, InfoItem, InfoList} from './styledComponents'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = videoDetails

  let date = formatDistanceToNow(new Date(publishedAt))
  const dateList = date.split(' ')
  if (dateList.length === 3) {
    dateList.shift()
    date = dateList.join(' ')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <SavedVideoContainer isDark={isDark}>
              <img
                style={{width: '50%', maxWidth: '350px', height: '180px'}}
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <div style={{marginLeft: '20px'}}>
                <p style={{marginTop: '0', marginBottom: '5px'}}>{title}</p>
                <p style={{margin: 0}}>{channel.name}</p>
                <InfoList>
                  <InfoItem isDark={isDark}>
                    <p style={{margin: 0}}>{`${viewCount} views`}</p>
                  </InfoItem>
                  <InfoItem isDark={isDark}>
                    <p
                      style={{margin: 0, marginLeft: '4px'}}
                    >{`• ${date} ago`}</p>
                  </InfoItem>
                </InfoList>
              </div>
            </SavedVideoContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
