/**
 * AscendHQ - In-Game Window
 * Handles user interface, Overwolf authentication, and game data display
 */

// Global variables
let performanceChart = null;
let currentUser = null;
let gameEvents = [];

// Elements
const loginButton = document.getElementById('loginButton');
const loginStatus = document.getElementById('loginStatus');
const loginSection = document.getElementById('loginSection');
const gameDataSection = document.getElementById('gameDataSection');
const performanceStats = document.getElementById('performanceStats');
const gameEventsEl = document.getElementById('gameEvents');
const minimizeButton = document.getElementById('minimizeButton');
const closeButton = document.getElementById('closeButton');

// Initialize the app
function init() {
    console.log("AscendHQ: In-game window initialized");
    
    // Setup window controls
    setupWindowControls();
    
    // Setup Overwolf authentication
    setupAuthenticationFlow();
    
    // Setup game events listener
    setupGameEventsListener();
    
    // Initialize chart
    initializeChart();
    
    // Check login status
    checkLoginStatus();
}

// Setup window control buttons
function setupWindowControls() {
    minimizeButton.addEventListener('click', () => {
        overwolf.windows.getCurrentWindow(result => {
            if (result.success) {
                overwolf.windows.minimize(result.window.id);
            }
        });
    });
    
    closeButton.addEventListener('click', () => {
        overwolf.windows.getCurrentWindow(result => {
            if (result.success) {
                overwolf.windows.close(result.window.id);
            }
        });
    });
}

// Setup Overwolf authentication
function setupAuthenticationFlow() {
    loginButton.addEventListener('click', () => {
        loginWithOverwolf();
    });
}

// Login with Overwolf
function loginWithOverwolf() {
    updateLoginStatus('Logging in...', 'normal');
    
    overwolf.profile.getCurrentUser(result => {
        if (result.success) {
            handleLoginSuccess(result.username, result.userId);
        } else {
            if (result.status === 'error') {
                if (result.reason === 'not-logged-in') {
                    // User needs to authenticate with Overwolf
                    overwolf.profile.openLoginDialog();
                } else {
                    updateLoginStatus(`Login failed: ${result.reason}`, 'error');
                }
            }
        }
    });
    
    // Listen for login state changes
    overwolf.profile.onLoginStateChanged.addListener(loginStateResult => {
        if (loginStateResult.status === 'success' && loginStateResult.loginState === 'login') {
            overwolf.profile.getCurrentUser(userResult => {
                if (userResult.success) {
                    handleLoginSuccess(userResult.username, userResult.userId);
                }
            });
        } else if (loginStateResult.loginState === 'logout') {
            handleLogout();
        }
    });
}
