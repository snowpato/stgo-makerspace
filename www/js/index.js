var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
	
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
	// deviceready Event Handler
    onDeviceReady: function() {
        $.mobile.changePage( "home.html", { transition: "slide", changeHash: false });
    },
	
};
