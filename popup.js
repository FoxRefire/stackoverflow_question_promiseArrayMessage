chrome.tabs.query({active:true, currentWindow:true}, async tabs => {
    let response = await chrome.tabs.sendMessage(tabs[0].id, {type: 'ping'})

    //It only got first response(1), expect [Promise(1), Promise(2), Promise(3), Promise(4)]
    document.getElementById("result").innerText = response
})
