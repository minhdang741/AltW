/**
 * Toggle enable/disable extension
 */
window.onload=function(){
    // Set default state
    let element = document.getElementById("idToggleInput");
    chrome.storage.local?.get("isEnabled", (result) => {
        element.checked = result ? result.isEnabled : true;
        chrome.storage.local.set({isEnabled: element.checked});
    });

    // Add event passing state to service worker(main.js) 
    element?.addEventListener('change', () => {
        // Get current state
        let isEnabled = document.getElementById("idToggleInput").checked;
        
        // Save to local storage
        chrome.storage.local.set({isEnabled: isEnabled});

        // Pass state to service worker
        chrome.runtime.sendMessage({isEnabled: isEnabled});
    });
}