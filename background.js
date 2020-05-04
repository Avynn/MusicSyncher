const content = chrome.declarativeContent;

const rule = {
    conditions : [
        new content.PageStateMatcher({
            pageUrl : {hostEquals: 'www.twitch.tv'}
        })
    ],
    actions : [
        new content.ShowPageAction()
    ]
}

chrome.runtime.onInstalled.addListener(function(){
    content.onPageChanged.removeRules(undefined, function(){
        content.onPageChanged.addRules([rule]);
    });
})