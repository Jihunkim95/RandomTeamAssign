function CopyToClipboard(text) {
    var str = UTF8ToString(text);
    navigator.clipboard.writeText(str).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(error) {
        console.error('Failed to copy text: ', error);
    });
}

function GetClipboardText() {
    navigator.clipboard.readText().then(function(text) {
        Module.unityInstance.SendMessage("TextCopyHandler", "SetInputFieldText", text);
    }).catch(function(error) {
        console.error('Failed to read text: ', error);
    });
}
