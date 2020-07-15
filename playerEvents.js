kWidget.addReadyCallback(function(playerId) {
    var kdp = document.getElementById(playerId);
    kdp.kBind('mediaReady', function() {
        debugger;
        alert("Hey Hey for 'mediaReady'");
        console.log("Hey Hey for 'mediaReady'");
        kdp.sendNotification("mediaDownloadCustom", { entryID: '12344321' });
    });

    kdp.kBind('doPause', function() {
        debugger;
        alert("Hey Hey for 'doPause'");
        console.log("Hey Hey for 'doPause'");
    });

    kdp.kBind('doPlay', function() {
        debugger;
        alert("Hey Hey for 'doPlay'");
        console.log("Hey Hey for 'doPlay'");
    });

    kdp.kBind('doStop', function() {
        debugger;
        alert("Hey Hey for 'doStop'");
        console.log("Hey Hey for 'doStop'");
    });

    kdp.kBind('mediaDownloadCustom', function(data) {
        debugger;
        alert(data);
        console.log(data);
        alert("Hey Hey for 'mediaDownloadCustom'");
        console.log("Hey Hey for 'mediaDownloadCustom'");
    });
});
