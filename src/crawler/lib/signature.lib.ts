import axios from 'axios';
import https from 'https';


const tlsAgent = new https.Agent({
    keepAlive: true,

    minVersion: 'TLSv1.2',
    maxVersion: 'TLSv1.3',

    ciphers: [
        'TLS_AES_256_GCM_SHA384',
        'TLS_CHACHA20_POLY1305_SHA256',
        'TLS_AES_128_GCM_SHA256'
    ].join(':'),

    honorCipherOrder: true,

    ecdhCurve: 'X25519:P-256:P-384',

    rejectUnauthorized: true
});


export const client = axios.create({
    httpsAgent: tlsAgent,

    headers: {
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36',

        'Accept':
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',

        'Accept-Language': 'en-US,en;q=0.9',

        'Connection': 'keep-alive',

        'Upgrade-Insecure-Requests': '1'
    }
});