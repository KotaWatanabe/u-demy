import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoLists, VideoDetail } from './components';

import youtube from './api/youtube';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit('pdf generation with node');
  }, []);

  async function onFormSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get('search', { params: { q: searchTerm } });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={onFormSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoLists videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
