/** 
 * Click on extension to toggle on/off and get original tab's id
 * */
// var originalTab = 0;
// var isEnabled = false;
// chrome.action.onClicked.addListener((currentTab) => {
//     isEnabled = !isEnabled;
//     console.log('currentTab: ', currentTab);
//     originalTab = currentTab.id;
//     console.log('originalTab: ', originalTab);
//     console.log('enabled: ', isEnabled);
//     window.open("www.google.com","_blank");
// });


/** 
 * Close any new tab that not having pending url (ad)
 * */
chrome.tabs.onCreated.addListener(async (newTab) => {
    console.log('newTab: ', newTab);
    console.log('pending Url: ', newTab.pendingUrl);
    if(!newTab.pendingUrl) {
        chrome.tabs.remove(newTab.id);
    } else {
        console.log('test');
    }
});


// chrome.tabs.onActivated.addListener((activeTab) => {
//     console.log('activeTab: ', activeTab);
// });