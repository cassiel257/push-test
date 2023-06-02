var push = require('web-push')

//let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {

    publicKey: 'BBq-nqDoTiEAG6osu6t6OrtGO0ruPnlbmHzzWXz1_9asguo-oAa-AlXGfD_zZzjIdtG7ExUF9P-rVjZicsnnwgI',
    privateKey: 'c3uKZOFTMGOOXpSycynHpkR9NPAfVU-dXHGqLnVzIfo'  
    
}

//console.log(vapidKeys);

push.setVapidDetails('mailto:test@mail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}

push.sendNotification(sub, 'Test Message!')