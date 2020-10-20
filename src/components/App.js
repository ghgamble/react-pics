import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
      state = { images: [] }; 
      async onSearchSubmit(term) {
            const response = await axios
                  .get('https://api.unsplash.com/search/photos', {
                        params: { query: term },
                        headers: {
                              Authorization: 'Client-ID VJeW-tzjoo_czQ22UhxFRxemh16xHrxSL06F-PcFwR8'
                        }
                  });
            console.log(response.data.results);
      }
      render() {
            return (
                  <div className="ui container" style={{ marginTop: "10px" }}>
                        <SearchBar onSubmit={this.onSearchSubmit} />
                        <ImageList />
                  </div>
            );
      }
}

export default App;
