// Submit the site's canonical URLs to IndexNow (Bing, Yandex, Naver, Seznam).
// Run after a deploy:  node scripts/indexnow.mjs
// The key file must be reachable at HOST/KEY.txt (see public/<key>.txt).

const HOST = "www.iptvprovider.me";
const KEY = "c1e0b143fbc3ea79f872196a2fd7f73c";

const urlList = [
  `https://${HOST}/iptv-smarters-pro`,
  `https://${HOST}/iptv-free-trial-2026`,
  `https://${HOST}/iptv-subscription-plans`,
  `https://${HOST}/learn`,
  `https://${HOST}/learn/iptv-explained`,
  `https://${HOST}/how-to`,
  `https://${HOST}/how-to/install-iptv-on-firestick`,
  `https://${HOST}/how-to/install-iptv-on-android`,
  `https://${HOST}/how-to/install-iptv-on-smart-tv`,
  `https://${HOST}/how-to/install-iptv-on-apple-tv`,
  `https://${HOST}/how-to/install-iptv-on-mag-box`,
  `https://${HOST}/how-to/install-iptv-on-windows-mac`,
  `https://${HOST}/compare`,
  `https://${HOST}/compare/iptv-smarters-pro-vs-tivimate`,
];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow -> ${res.status} ${res.statusText}`);
console.log(`Submitted ${urlList.length} URL(s):`);
for (const u of urlList) console.log(`  ${u}`);
if (!res.ok && res.status !== 202 && res.status !== 200) {
  console.error("IndexNow submission was not accepted.");
  process.exit(1);
}
