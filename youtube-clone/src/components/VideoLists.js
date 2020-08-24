import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

const VideoLists = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoLists;
