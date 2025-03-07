// background.js
console.log('Background script running');

overwolf.extensions.current.getExtraObject("overwolf-plugin", function(result) {
    if (result.status === "success") {
        window.plugin = result.object;
        console.log("Plugin initialized", window.plugin);
    } else {
        console.error("Failed to initialize plugin", result);
    }
});

overwolf.games.onGameInfoUpdated.addListener(function(info) {
    if (info && info.gameInfo && info.runningChanged) {
        if (info.gameInfo.isRunning) {
            console.log("Game started", info.gameInfo);
            // Add code to handle game start
        } else {
            console.log("Game stopped", info.gameInfo);
            // Add code to handle game stop
        }
    }
});

overwolf.windows.onStateChanged.addListener(function(state) {
    if (state.window_name === "background" && state.window_state_ex === "closed") {
        console.log("Background window closed, shutting down extension");
        overwolf.extensions.current.close();
    }
});
