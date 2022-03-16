require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Twit = require('twit');

const T = new Twit({
	consumer_key: process.env.KEY,
	consumer_secret: process.env.SECRET,
	access_token: process.env.TOKEN,
	access_token_secret: process.env.TOKENSECRET
});

const imageB64 = fs.readFileSync(__dirname + '\\sangria.png', { encoding: 'base64' })

T.post('media/upload', { media_data: imageB64 }, function (err, data, response) {
	let mediaIdStr = data.media_id_string
	let altText = "enjoying some sangria on this lovely Thursday night"
	let meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
	T.post('media/metadata/create', meta_params, function (err, data, response) {
		if (!err) {
			const date = new Date();
			let params = { status: `enjoying some sangria on this lovely Thursday night. ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`, media_ids: [mediaIdStr] }
 
			T.post('statuses/update', params, function (err, data, response) {
				console.log(`Tweeted: ${data.text}`)
			})
		} else {
			console.log(`Tweet Failed!`)
		}
	})
})