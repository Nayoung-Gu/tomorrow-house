const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

function toggleBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  let newCount = count

  if (this.classList.contains('is-active')) {
    // NOTE: 비활성화 예정 (ic-bookmark) / 북마크 -1
    icon.className = 'ic-bookmark'
    newCount -= 1
    countSpan.innerHTML = newCount.toLocaleString()
  } else {
    // NOTE: 활성화로 예정 (ic-bookmark-filled) / 북마크 +1
    icon.className = 'ic-bookmark-filled'
    newCount += 1
    countSpan.innerHTML = newCount.toLocaleString()
  }

  this.classList.toggle('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)
orderCtaBookmarkButton.addEventListener('click', toggleBookmark)
