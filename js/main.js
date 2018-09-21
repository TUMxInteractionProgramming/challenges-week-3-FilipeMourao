console.log('app is alive');
function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    $('#chatName').html(channelName);
    $('#chatLocation').html('upgrading.never.helps');
    $("#chatNameHyperLink").attr("href", "http://w3w.co/upgrading.never.helps");
    $('#chatNameHyperLink').attr('css', 'decoration: none;');
    $(".channelsNames").css("color","black");
    $(".channelsNames").css("border-left","none");
    $(channelName).css("color","#3F51B5");
    $(channelName).css("border-left","4px solid #3F51B5 ");
    console.log('Changing the tab bar')
    if(channelName.localeCompare("#SevenContinents")){
        $("#chatStar").attr("src","http://ip.lfe.mw.tum.de/sections/star-o.png");
    }
    else{
        $("#chatStar").attr("src","http://ip.lfe.mw.tum.de/sections/star.png");
    }

}    
function switchButton(buttonName) {
    $(".buttonsNames").css("color","black");
    $(".buttonsNames").css("border-bottom","none");
    $(buttonName).css("color","#3F51B5");
    $(buttonName).css("border-bottom","4px solid #3F51B5 ");
    console.log('Changing the button bar')
   
}   
function showEmojiBar(){
    $('#emojis').show();
}