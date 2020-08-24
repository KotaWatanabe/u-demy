import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoLists, VideoDetail } from './components';

import youtube from './api/youtube';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onFormSubmit('pdf generation with node');
  }

  onFormSubmit = async searchTerm => {
    const response = await youtube.get('search', { params: { q: searchTerm } });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid style={{ justifyContent: 'center' }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.onFormSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoLists videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
