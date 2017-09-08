const mainPage = function () {
  const aboutMe = document.getElementsByClassName('js-about-me')[0];
  const aboutMeLink = document.getElementsByClassName('js-about-me--link')[0];
  const splashImage = document.getElementsByClassName('js-splash')[0];

  aboutMeLink.addEventListener('click', function () {
    aboutMe.classList.toggle('hidden');
    splashImage.classList.toggle('hidden');
  });
};

document.addEventListener("DOMContentLoaded", () => mainPage());