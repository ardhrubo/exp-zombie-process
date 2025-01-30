import puppeteer from "puppeteer";

setInterval(() => {
    console.log('manager.mjs pid: ' + process.pid);
}, 1000);

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome-stable',
        headless: false,
    });

    const browserWSEndpoint = browser.wsEndpoint();

    console.log('Manager process PID: ' + process.pid);
    console.log('Browser process PID: ' + browser.process().pid);

    console.log(browserWSEndpoint);
})();