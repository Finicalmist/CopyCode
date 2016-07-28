//META{"name":"copyCode"}*//

var copyCode = function () {};

copyCode.prototype.copyButton = function () {
  $("code.hljs").each(function(){

    if (!$(this).find('.copybutton').length) {

      $(this).css({
        "position": "relative"
      });
      $(this).append("<button class='copybutton'>Copy</button>");
      $(this).find(".copybutton").css({
        "position": "absolute",
        "right": "0",
        "bottom": "0"
      });
        $(this).find(".copybutton").click(function(){
        $(this).hide();
        var copytext = $(this).parent()[0];
        var range = document.createRange();
        range.selectNode(copytext);
        window.getSelection().addRange(range);
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          //console.log('Copy command was ' + msg);
        } catch(err) {
          //console.log('Oops, unable to copy');
        }
        window.getSelection().removeAllRanges();
        $(this).show();
      });
    }
  });

};

copyCode.prototype.start = function () {
  this.copyButton();
};
copyCode.prototype.load = function () {
  this.copyButton();
};
copyCode.prototype.enable = function () {
  this.copyButton();
};

copyCode.prototype.onSwitch = function () {
  this.copyButton();
};
copyCode.prototype.onMessage = function () {
  this.copyButton();
};

copyCode.prototype.getSettingsPanel = function () {
    return "<h3>Go away!</h3>";
};

copyCode.prototype.getName = function () {
    return "Copy Code Plugin";
};

copyCode.prototype.getDescription = function () {
    return "Copies Code from Code Blocks with a Button";
};

copyCode.prototype.getVersion = function () {
    return "1.0";
};

copyCode.prototype.getAuthor = function () {
    return "Finicalmist";
};

copyCode.prototype.remove = function () {
  $("code.hljs").css({
    "position": ""
  });
  $(".copybutton").remove();
};

copyCode.prototype.stop = function () {
  this.remove();
};
copyCode.prototype.unload = function () {
  this.remove();
};
copyCode.prototype.disable = function () {
  this.remove();
};
