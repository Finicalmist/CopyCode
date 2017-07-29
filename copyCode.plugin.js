//META{"name":"copyCode"}*//

var copyCode = function() {};

copyCode.prototype.inject = function() {
  setTimeout(function(){
	  $("code.hljs").each(function() {
		if (!$(this).find('.copybutton').length) {
		  $(this).css({
			"position": "relative"
		  });
		  var button = $("<button>Copy</button>").addClass("copybutton").css({
			"color": "#839496",
			"border": "2px solid #282b30",
			"background-color": "#2e3136",
			"position": "absolute",
			"right": "0",
			"bottom": "0"
		  });
		  button.click(function() {
			$(this).hide();
			var text = $(this).parent()[0];
			var range = document.createRange();
			range.selectNode(text);
			window.getSelection().addRange(range);
			try {
			  document.execCommand('copy');
			} catch (err) {
			  console.log(err);
			}
			window.getSelection().removeAllRanges();
			$(this).show();
		  });
		  $(this).append(button);
		}
	  });
  }, 100);
};

copyCode.prototype.observer = function(e) {
  this.inject();
};

copyCode.prototype.start = function() {
  this.inject();
};

copyCode.prototype.load = function() {};
copyCode.prototype.enable = function() {};

copyCode.prototype.onSwitch = function() {};

copyCode.prototype.onMessage = function() {};

copyCode.prototype.getSettingsPanel = function() {
  return "";
};

copyCode.prototype.getName = function() {
  return "Copy Code Plugin";
};

copyCode.prototype.getDescription = function() {
  return "Copies Code from Code Blocks with a Button";
};

copyCode.prototype.getVersion = function() {
  return "2.0";
};

copyCode.prototype.getAuthor = function() {
  return "Finicalmist";
};

copyCode.prototype.remove = function() {
  $("code.hljs").css({
    "position": ""
  });
  $(".copybutton").remove();
};

copyCode.prototype.stop = function() {};
copyCode.prototype.unload = function() {};
copyCode.prototype.disable = function() {};