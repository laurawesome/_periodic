// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group



//
// create base UI tab and root window
//
var webWin = Titanium.UI.createWebView({
	
	url:'/index.html', 
	enableZoomControls:false, 
	scalesPageToFit:true,
	statusBarHidden: true, 
	showScrollbars: false
	});
	
var win1 = Titanium.UI.createWindow({  
	
	  navBarHidden: true,  
      backgroundColor:'#fff', 
      touchEnabled: true, 
      //scalesPageToFit:true, 
      fullscreen:true, 
      statusBarHidden: true
});
win1.orientationModes = [

    Titanium.UI.LANDSCAPE_LEFT,
    Titanium.UI.LANDSCAPE_RIGHT,

];
win1.add(webWin);
win1.open({modal:true});


