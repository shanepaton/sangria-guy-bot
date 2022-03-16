# Sangria Guy Bot
~~this project is so stupid~~

This is the source code to my twitter bot.

### Running your own
To run your bot, you need to have a twitter account.
You also need to make a project with Elevated Access to the twitter API.
Then in Settings > User Authentication Settings, set OAuth 1.0a to on.
Set the callback URL to your pc's <i>local</i> ip port 3000 and the website URL to any website
Example:
Callback URI / Redirect URL
- `http://192.168.0.123:3000`

Website URL
- `https://shanepaton.com`

Then genrate an API Key, Access token and their secrets then rename the example.env to .env and put replace the values with your own.

then run the bot with `node index.js`

### Crontab
You can also run the bot with a cron job.
Instead of using `node index.js` you can add this to your crontab by doing
`crontab -e` and add this line:
`0 19 * * 4 node [INDEX.JS] >> /var/log/twitter-bot.log 2>&1`

### Conclusion
This bot is proof that I should't be trusted with my time.