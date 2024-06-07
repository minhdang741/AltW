/**
 * Initialize
 */
let isEnabled = true;
chrome.runtime.onInstalled.addListener(() =>{
    chrome.storage.local.set({isEnabled: isEnabled});
});
/**
 * Get current state when start up
 */
chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.get("isEnabled", (result) => {
        isEnabled = result.isEnabled;
    })
});
/**
 * Listen enable/disable state from popup
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        isEnabled = request.isEnabled;
        console.log("isEnable: " + isEnabled);
    }
);
/** 
 * Close any new tab that not having pending url (ad)
 * */
chrome.tabs.onCreated.addListener(async (newTab) => {
    if(isEnabled) {
        console.log('newTab: ', newTab);
        console.log('pending Url: ', newTab.pendingUrl);
        if(!newTab.pendingUrl && newTab.title == '') {
            chrome.tabs.remove(newTab.id);
        }
    }
});
