
function HeadlineReceiver() {
    var selectionAsker = window.prompt("Enter number of headlines: ");
    var hashtags = []
    for (i = 0; i < parseInt(selectionAsker); i++) {
        var headlineAsker = window.prompt("Enter headline " + (i+1) + ": ");
        hashtags[i] = headlineAsker;
    }
    return hashtags;
}

function HashtagGen(hashtags) {
    for(i = 0; i < hashtags.length; i++) {
        hashtags[i].replace(/[^\w ]/g, "")
	    hashtags[i].toLowerCase()
	    hashtags[i].split(" ")
	    hashtags[i].map(x => "#" + x)
	    hashtags[i].sort((x, y) => x.length - y.length)
	    hashtags[i].slice(0, 3);
    }
    return hashtags;
}

alert(HashtagGen(HeadlineReceiver));