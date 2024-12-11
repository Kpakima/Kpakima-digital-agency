const mobileOpenIcon = document.querySelector('.mobile-open-icon');
const mobileCloseIcon = document.querySelector('.mobile-close-icon');
const nav = document.querySelector('nav');
const headerBgOverlay = document.querySelector('.header-bg-overlay');
const questionWrap = document.querySelectorAll('.question-wrap');
const questionIcon = document.querySelectorAll('.question-icon');
const answer = document.querySelectorAll('.answer');
const services = document.querySelector('.services');
const otherservices = document.querySelector('.other-services');
const searchFormCloseIcon = document.querySelector('.close-search-icon');
const searchFormWrapper = document.querySelector('.search-form-wrapper');
const searchFormBgOverlay = document.querySelector('.search-form-bg-overlay');
const searchIcon = document.querySelector('.search-icon');

services.addEventListener('mouseover', function () {
  otherservices.classList.add('show');
});

services.addEventListener('mouseout', function () {
  otherservices.classList.remove('show');
});

const openFunction = function () {
  nav.classList.add('open');
  headerBgOverlay.classList.add('header-overlay');
  document.querySelector('body').style = 'overflow:hidden;';
};

const closeFunction = function () {
  nav.classList.remove('open');
  headerBgOverlay.classList.remove('header-overlay');
  document.querySelector('body').style = 'overflow:none;';
};

const displayAnswerOne = function () {
  answer[0].classList.toggle('display-answer');
  questionIcon[0].classList.toggle('question-icon-rotate');
};
const displayAnswerTwo = function () {
  answer[1].classList.toggle('display-answer');
  questionIcon[1].classList.toggle('question-icon-rotate');
};
const displayAnswerThree = function () {
  answer[2].classList.toggle('display-answer');
  questionIcon[2].classList.toggle('question-icon-rotate');
};
const displayAnswerFour = function () {
  answer[3].classList.toggle('display-answer');
  questionIcon[3].classList.toggle('question-icon-rotate');
};

questionWrap[0].addEventListener('click', displayAnswerOne);
questionWrap[1].addEventListener('click', displayAnswerTwo);
questionWrap[2].addEventListener('click', displayAnswerThree);
questionWrap[3].addEventListener('click', displayAnswerFour);

headerBgOverlay.addEventListener('click', closeFunction);
mobileOpenIcon.addEventListener('click', openFunction);
mobileCloseIcon.addEventListener('click', closeFunction);

// The search element scripts
searchIcon.addEventListener('click', function () {
  searchFormBgOverlay.classList.add('show-form-overlay');
  searchFormWrapper.classList.add('show-search-form');
  document.querySelector('body').style = 'overflow:hidden;';
});

searchFormCloseIcon.addEventListener('click', function () {
  searchFormBgOverlay.classList.remove('show-form-overlay');
  searchFormWrapper.classList.remove('show-search-form');
  document.querySelector('body').style = 'overflow:none;';
});
