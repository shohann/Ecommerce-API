const { google } = require('googleapis');

const { getOauth2ClientId, getOauth2ClientSecret, 
        getOauth2RedirectUri, getOauth2RefreshToken } = require('./appConfigs');

const oauth2ClientId = getOauth2ClientId();
const oauth2ClientSecret = getOauth2ClientSecret();
const oauth2RedirectUri = getOauth2RedirectUri();
const oauth2RefreshToken =getOauth2RefreshToken();

module.exports.getOauth2ClientAccessToken = async () => {
    const oauth2Client = new google.auth.OAuth2(oauth2ClientId, oauth2ClientSecret, oauth2RedirectUri);
    oauth2Client.setCredentials({refresh_token: oauth2RefreshToken});
    const accessToken = await oauth2Client.getAccessToken();
    return accessToken 
};


