chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      var css =
          ".has_nicotine .prdc__img { filter: none; } .menu__extra-product-item.has_nicotine img { filter: none; }",
        head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("style");

      head.appendChild(style);

      style.appendChild(document.createTextNode(css));
    }
  }, 10);
});
