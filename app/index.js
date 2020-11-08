const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};

function sendData(){
    console.log(getDeviceType());    
    $.post( serverUrl,{ deviceType: getDeviceType},function(json) {
         console.log("requested access complete");
    })
}