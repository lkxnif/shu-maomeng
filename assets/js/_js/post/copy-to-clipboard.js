

/* Copy to Clipboard. */
function copyToClipboard(text, success_msg) {
  let tooltipElm = '#copytoclipboard';
  if (!text || text.length === 0) return;

  /* check browser is supported navigator.clipboard */
  if (typeof (navigator.clipboard) != 'undefined') {
    navigator.clipboard.writeText(text).then(function () {
      showToolTip(tooltipElm, success_msg);
    }, function (err) {
      showToolTip(tooltipElm, 'Copy Error!');
    });
  } else {
    /* try with depreciated method */
    const $obj = $("<input>");
    $("body").append($obj);
    $obj.val(text).select();
    document.execCommand("copy");
    $obj.remove();
    showToolTip(tooltipElm, success_msg);
  }
}
