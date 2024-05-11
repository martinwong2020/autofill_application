async function loadJSON(path) {
    const response = await fetch(chrome.runtime.getURL(path));
    return await response.json();
}
document.getElementById('autofillButton').addEventListener('click', function(){
    loadJSON("information.json").then((data) =>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['injector.js']
            }, () => {
                chrome.tabs.sendMessage(tabs[0].id, { data: data });
            });
        });
    })
});
