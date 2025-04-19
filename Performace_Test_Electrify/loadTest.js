const newman = require('newman');

const concurrentRequests = 5;

for (let i = 0; i < concurrentRequests; i++) {
    newman.run({
        collection: require('./Test_Online_Voting_app.postman_collection.json'),
        reporters: 'cli',
        iterationCount: 20,
    }, (err) => {
        if (err) { console.error(err); }
        else { console.log(`Run ${i + 1} completed`); }
    });
}