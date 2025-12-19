const http = require('http');

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/jobs/latest',
    method: 'GET',
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);

    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const jobs = JSON.parse(data);
            console.log(`Jobs found: ${jobs.length}`);
            if (jobs.length > 0) {
                console.log('First job:', jobs[0].title);
            }
        } catch (e) {
            console.log('Response:', data);
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.end();
