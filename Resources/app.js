// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group



//
// create base UI tab and root window
//
var webWin = Titanium.UI.createWebView({url:'/index.html'});
var win1 = Titanium.UI.createWindow({  
      backgroundColor:'#fff'
});

win1.add(webWin);
win1.open();

