import axios from 'axios';

export default axios.create({
      baseURL: 'https://api.unsplash.com',
      headers: {
            Authorization: 'Client-ID VJeW-tzjoo_czQ22UhxFRxemh16xHrxSL06F-PcFwR8'
      }
});
