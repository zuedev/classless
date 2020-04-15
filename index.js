$(document).ready(() => {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });
  $("body").fadeIn();
});
