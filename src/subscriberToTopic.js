export const subscriberToTopic = (topic) =>{
    // fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic, {
    fetch('https://iid.googleapis.com/iid/v1/rel/topics/'+topic, {
        method: 'POST',
        headers: new Headers({
            'Authorization': `key=${process.env.REACT_APP_FIREBASE_KEY}`
        })
    }).then(response => {
        if (response.status < 200 || response.status >= 400) {
            return 'Error subscribing to topic: '+response.status + ' - ' + response.body;
        }
        console.log('Subscribed to "'+topic+'"');
    }).catch(error => {
        console.error(error);
    })
}