const puppeteer = require('puppeteer');
let cTab;
let link = 'https://www.youtube.com/playlist?list=PLW-S5oymMexXTgRyT3BWVt_y608nt85Uj';
(async function(){
   try {
   let browserOpen = puppeteer.launch({
        headless : false,
        defaultViewport : null,
        args: [' --start-maximized']

    })
     let browserInstance = await browserOpen;
     let allTabsArr = await browserInstance.pages();
     cTab = allTabsArr[0];
     await cTab.goto(link);
     await cTab.waitForSelector('h1#title');
     let name = await cTab.evaluate(function(select){return document.querySelector(select).innerText},'h1#title');
     

     let allData = await cTab.evaluate(getData,'#status .style-scope.ytd-playlist-sidebar-primary-info-renderer');
     console.log(name ,allData.noOfVideos ,allData.noOfViews);

     let totalVideos = allData.noOfVideos.split(" ")[0];
     console.log(totalVideos);

     let currentVideos = await getCVideoLength();
     console.log(currentVideos);

     while( totalVideos-currentVideos >= 20){
        await scrollToBottom();
        currentVideos = await getCVideoLength();

     }
     } catch (error ) {
    
    }




})()

function getData(selector){
    let allElems = document.querySelectorAll(selector);
    let noOfVideos = allElems[0].innerText;
    let noOfViews = allElems[1].innerText;

    return{
        noOfVideos,
        noOfViews
    }
}

async function getCVideoLength(){
let length = await cTab.evaluate(getLength,'#container>#thumbnail span.style-scope.ytd-thumbnail-overlay-time-status-renderer');
return length;
}

async function scrollToBottom(){
    await cTab.evaluate(goToBottom);
    function goToBottom(){
        window.scrollBy(0, window.innerHeight);
    }
}

function getLength(durationSelect){
    let durationElem = document.querySelectorAll(durationSelect);
    return durationElem.length;

}

