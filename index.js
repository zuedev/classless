$(document).ready(() => {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });

  window.zState = {
    page: "#home",
  };

  $("body").fadeIn();
});

function goto(x) {
  $(window.zState.page).fadeOut(400, () => {
    $(x).fadeIn(400, () => {
      window.zState.page = x;
    });
  });
}
