## Reddit Deal Scraper & Affiliate Appender

This Node.js script is a simple tool to find deal links on Reddit and add your Amazon affiliate tag to them. It scans the most recent 15 posts from (in this example) the /r/buildapcsales subreddit, identifies Amazon links, and adds an affiliate link to them.

I built this as a stepping stone for a bigger project, showcasing how you can:

- Use Node.js for web requests.
- Parse JSON data.
- Modify URLs in JavaScript.
- Retrieve Reddit post data by adding .json to a subreddit URL.

## How to use

1. Clone the Repository:
   ```bash
   git clone [https://github.com/Harrison-cl/Reddit-Deal-Scraper-and-Affiliate-Appender.git](https://github.com/Harrison-cl/Reddit-Deal-Scraper-and-Affiliate-Appender.git)
    cd Reddit-Deal-Scraper-and-Affiliate-Appender
   ```
   
3. Add affiliate tag:
   Open reddit-scraper-node-version.js. Find the line links.push(url.split('?')[0] + '?tag=yourtag-20'); and replace it with an actual Amazon affiliate tag.

5. Run the script:
   ```bash
   node reddit-scraper-node-version.js
   ```
   
6. it prints the results to console.


## Important Note

Reddit is generally more lenient with scraping compared to other sites but whenever running scripts like this avoid spamming requests. This script is just meant to be ran occasionally, for example once a day, to gather up links and store them with your affiliate link added on to them. Too many requests will get you temporarily blocked. Always obey and be mindful of a websites terms of service especially if utilizing any sort of automated scraping script.
