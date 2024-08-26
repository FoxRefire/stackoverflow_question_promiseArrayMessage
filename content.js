let num = Number((new URL(location.href)).searchParams.get("num"))
if(num){
    console.log("Content script loaded on frame" + num)
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log("Debug"+num)
        //Send response after {num} second
        setTimeout(() => sendResponse(num), num*1000)
        return true
    })
}
