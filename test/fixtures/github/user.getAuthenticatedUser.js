var nock = require('nock');

nock('https://api.github.com:443')
  .get('/user')
  .reply(200, ["1f8b08000000000000039d93418bdb301085ffcaa2b313c54e4cbb82a5d03def6d7bd98b19cb8a3d204b4292bda466ff7b47b61b9a5c8a03011b59ef9bc7cbbc8969dba26182f5e0656d83ec946719c386893cff762acbef19831122f86af09aee7531ba20385f0ec3bec5d80df5109497d64465e25eda9e0f7c55ff185f8ec46bfd0a496046077730872b6851132df05b475decf59d8565f4acb8bd7bb65adb4f62dc7bfecf187e1592c3e51d4dfb18848413b791e2ac52385f29040c71b3a55934f1f4a8b04998407f8657cd565bab8c4c","7d1af23371af9c9d79431da44717d19acdf66ec404b3be0583bfe1211889033192b1cd46661189d5483bb859bda826ee3c8e202f2916afa4c291727e8c78272760bc3845cbff8bb621a58e5155d0f4a97c67d04165cc409f2ebc51139f7e5eab48ebedc05c96dad454d7b584d4c1b4f5fbb5b47b3467cb09acad9cd34f246aa457a0b3a75730d0408aa7074c35a6d70ee95bad69e43abf46cb8419b4ce981b6a8db25a4215e5f560de46260e7feb411d63e2f84f59e66f92c091928348938a439eefe87728dff3529407513c7fd0f4c13537774ebbbcd815c7f7fc591427919f3ed8d71fa20af8429d040000"], { server: 'GitHub.com',
  date: 'Fri, 26 Dec 2014 19:41:20 GMT',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'close',
  status: '200 OK',
  'x-ratelimit-limit': '5000',
  'x-ratelimit-remaining': '4995',
  'x-ratelimit-reset': '1419622911',
  'cache-control': 'private, max-age=60, s-maxage=60',
  'last-modified': 'Tue, 23 Dec 2014 19:24:14 GMT',
  etag: '"cb2686a717a5ef1c4e70d246bfb40ca3"',
  'x-oauth-scopes': 'repo',
  'x-accepted-oauth-scopes': '',
  vary: 'Accept, Authorization, Cookie, X-GitHub-OTP',
  'x-github-media-type': 'github.v3; format=json',
  'x-xss-protection': '1; mode=block',
  'x-frame-options': 'deny',
  'content-security-policy': 'default-src \'none\'',
  'access-control-allow-credentials': 'true',
  'access-control-expose-headers': 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval',
  'access-control-allow-origin': '*',
  'x-github-request-id': '18726832:634B:6E3DDFA:549DB9E0',
  'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
  'x-content-type-options': 'nosniff',
  'x-served-by': '065b43cd9674091fec48a221b420fbb3',
  'content-encoding': 'gzip' });
