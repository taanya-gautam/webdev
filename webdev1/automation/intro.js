const puppeteer = require("puppeteer");
let page;
console.log("Before");
// browser open
const browserOpenPromise = puppeteer.launch({headless:false});
//const pagesArrpromise = browserOpenPromise.then(function(browser){
    //console.log("Browser opned");
    browserOpenPromise
         .then(function(browser){
            // currently opened tab dega
            const pagesArrpromise = browser.pages();
            return pagesArrpromise;
         }).then(function(browserpages){
            page = browserpages[0];
            let gotoPromise = page.goto("https://www.google.com/");
            return gotoPromise;
        }).then(function(){
            //waiting for the element to appear on the page
            let elemeentWaitPromise = page.waitForSelector("input[type='text']",{visible:true});
            return elemeentWaitPromise;
        })
        .then(function(){
            //console.log("reached google home page");
            // type any element on the page --> with the help of  selector
             let keyWillBeSendPromise = page.type("input[type='text']","pepcoding");
             return keyWillBeSendPromise;
        }) .then(function(){
            //page.keyboard to type special character
           let enterWillBePressed = page.keyboard.press("Enter");
           return enterWillBePressed;
          
        }).then(function(){
            let elementWaitPromise = page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true});
            return elementWaitPromise;
        }).then(function(){
            //mouse
            let keyWillBeSendPromise = page.click("h3.LC20lb.DKV0Md");
             return keyWillBeSendPromise;
        })
        .catch(function(err){
            console.log(err);
        })
        
            
 


console.log("After");