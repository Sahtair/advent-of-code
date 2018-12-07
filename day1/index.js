const https = require('https');

https.get('https://adventofcode.com/2018/day/1/input',{
    headers: {
        'cookie': '_ga=GA1.2.2127963380.1544106490; _gid=GA1.2.1369819414.1544106490; session=53616c7465645f5f6c1db8a2c6915261aa06c5ab5e241abba96902c78ba3e9ef8d7959361d52e2786dae06862305a3f0'
    }
}, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.setEncoding('utf8')
    res.on('data', d => {
        const numbers = d.split('\n').filter(item => item);
        const frequency = numbers.reduce((sum, number) => {
            return sum + Number(number);
        }, 0);

        const frequencies = [];
        let current_freq = 0;
        let i = 0;
        while (true) {
            current_freq = current_freq + Number(numbers[i]);

            if (frequencies.indexOf(current_freq) > -1){
                
                break;
            }
            frequencies.push(current_freq);
            i++;
            if (i === numbers.length) {
                i = 0;
            }
        } 
        console.log('got em', current_freq)
    });
}).on('error', err => {
    console.log(err)
})