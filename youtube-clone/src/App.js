import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoLists, VideoDetail } from './components';

import youtube from './api/youtube';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onFormSubmit = async searchTerm => {
    const response = await youtube.get('search', { params: { q: searchTerm } });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.onFormSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoLists />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
