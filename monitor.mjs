import puppeteer from "puppeteer";


(async () => {
    const browser = await puppeteer.connect(
        {
            browserWSEndpoint: 'ws://127.0.0.1:41365/devtools/browser/59265b83-3d3d-4d82-8d43-2399a3c064cd'
        }
    )
    
    setInterval(() => {
        console.log(browser.wsEndpoint())
        console.log(browser.connected)
    }, 1000)
    



})();   


