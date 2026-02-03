// document.addEventListener('DOMContentLoaded', function () {


//   // FAQ accordion
// const faqButtons = document.querySelectorAll('.expandButton');

// if (faqButtons.length) {
//   faqButtons.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       e.preventDefault();

//       const key = btn.dataset.targetButton; // "1", "2", etc.
//       const answer = document.querySelector(`[data-target-more="${key}"]`);

//       if (!answer) return;

//       // toggle visibility
//       answer.classList.toggle('hidden');

//       // optional: rotate icon if you add one later
//       btn.classList.toggle('active');
//     });
//   });
// }

const faqButtons = document.querySelectorAll('.expandButton');

faqButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const key = btn.dataset.targetButton;
    console.log('FAQ clicked, key:', key);

    const answer = document.querySelector(`[data-target-more="${key}"]`);
    console.log('Answer found?', !!answer);

    if (!answer) return;

    answer.classList.toggle('hidden');
    btn.classList.toggle('active');
  });
});


  // Reviews slider
  if (window.jQuery && jQuery.fn.slick) {
    const $slider = jQuery('.slider');
    if ($slider.length) {
      $slider.not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    }
  };





