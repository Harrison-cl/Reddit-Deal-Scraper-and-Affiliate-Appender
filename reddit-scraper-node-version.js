// reddit-scraper-node-version.js
const https = require('https');

function getAffiliateLinks() {
  return new Promise((resolve) => {
    // Add User-Agent header to avoid blocking
    const options = {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    };

    https.get('https://www.reddit.com/r/buildapcsales/new.json?limit=15', options, (res) => {
      let rawData = '';
      
      res.on('data', (chunk) => rawData += chunk);

      res.on('end', () => {
        try {
          // First check if we got HTML instead of JSON
          if (rawData.startsWith('<!DOCTYPE')) {
            throw new Error('Reddit blocked the request. Try again later.');
          }
          
          const data = JSON.parse(rawData);
          const links = [];
          
          data.data.children.forEach(post => {
            const text = post.data.selftext + ' ' + post.data.url;
            const urlMatches = text.match(/https?:\/\/[^\s]+/g) || [];
            
            urlMatches.forEach(url => {
              if (url.includes('amazon.com')) {
                links.push(url.split('?')[0] + '?tag=yourtag-20');
              }
            });
          });
          
          console.log('Success! Found links:');
          links.forEach(link => console.log(link));
          resolve(links);
          
        } catch (error) {
          console.error('Error:', error.message);
          console.log('Raw response:', rawData.substring(0, 100) + '...');
          resolve([]);
        }
      });
    }).on('error', (error) => {
      console.error('Request failed:', error);
      resolve([]);
    });
  });
}

// Run it
getAffiliateLinks();