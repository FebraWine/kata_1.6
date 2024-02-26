const openSide = document.querySelector('.header__info-btn')
const openBack = document.querySelector('header')
const openMain = document.querySelector('main')
const sideBar = document.querySelector('.aside-close')
const sidebarclose = document.querySelector('.aside-close')
const closeSide = document.querySelector('.aside__left')
const openfeadback = document.querySelector('.aside-contacts__btn-open')
const feadback = document.querySelector('.feedback')
const closefeadback = document.querySelector('.feedback__img')
const open_side = document.querySelector('.header__contacts-btn-chat')
const footer = document.querySelector('footer')

const call = document.querySelector('.call')
const closeCall = document.querySelector('.call__img')
const openCall = document.querySelector('.aside-contacts__btn-open-call')
const openCallHeader = document.querySelector('.header__contacts-btn-call')

const contentBtn = document.querySelector('.content__main-text-btn')
const text_Count = document.querySelector('.content__main-text-count-p')
const text__btn = document.querySelector('.content__main-text-icon')
const btn_img = document.querySelector('.content__main-text-btn-img')

contentBtn.addEventListener('click', () => {
  if (text__btn.textContent == 'Читать далее') {
    text_Count.classList.remove('content__main-text-count-show')
    text__btn.textContent = 'Скрыть'
    btn_img.classList.add('content__main-text-btn-img--transfrom')
  } else {
    text__btn.textContent = 'Читать далее'
    text_Count.classList.add('content__main-text-count-show')
    btn_img.classList.remove('content__main-text-btn-img--transfrom')
  }
})

openSide.addEventListener('click', () => {
  openBack.classList.add('opacity--background')
  openMain.classList.add('opacity--background')
  footer.classList.add('opacity--background')
  sideBar.classList.add('aside--open')
})

closeSide.addEventListener('click', () => {
  openBack.classList.remove('opacity--background')
  openMain.classList.remove('opacity--background')
  footer.classList.remove('opacity--background')
  sideBar.classList.remove('aside--open')
})

openfeadback.addEventListener('click', () => {
  openBack.classList.add('opacity--background')
  openMain.classList.add('opacity--background')
  footer.classList.add('opacity--background')
  sidebarclose.classList.add('opacity--background')
  feadback.classList.add('feedback--open')
  if (!!document.querySelector('.aside--open')) {
    sideBar.classList.remove('aside--open')
  }
})

open_side.addEventListener('click', () => {
  openBack.classList.add('opacity--background')
  openMain.classList.add('opacity--background')
  footer.classList.add('opacity--background')
  sidebarclose.classList.add('opacity--background')
  feadback.classList.add('feedback--open')
  if (!!document.querySelector('.aside--open')) {
    sideBar.classList.remove('aside--open')
  }
})

closefeadback.addEventListener('click', () => {
  openBack.classList.remove('opacity--background')
  openMain.classList.remove('opacity--background')
  footer.classList.remove('opacity--background')
  sidebarclose.classList.remove('opacity--background')
  feadback.classList.remove('feedback--open')
})

openCallHeader.addEventListener('click', () => {
  openBack.classList.add('opacity--background')
  openMain.classList.add('opacity--background')
  footer.classList.add('opacity--background')
  sidebarclose.classList.add('opacity--background')
  call.classList.add('call--open')
})

closeCall.addEventListener('click', () => {
  openBack.classList.remove('opacity--background')
  openMain.classList.remove('opacity--background')
  footer.classList.remove('opacity--background')
  sidebarclose.classList.remove('opacity--background')
  call.classList.remove('call--open')
})

openCall.addEventListener('click', () => {
  openBack.classList.add('opacity--background')
  openMain.classList.add('opacity--background')
  footer.classList.add('opacity--background')
  sidebarclose.classList.add('opacity--background')
  call.classList.add('call--open')
  console.log('144')
  if (!!document.querySelector('.aside--open')) {
    sideBar.classList.remove('aside--open')
  }
})
