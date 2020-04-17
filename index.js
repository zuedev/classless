$(document).ready(() => {
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
