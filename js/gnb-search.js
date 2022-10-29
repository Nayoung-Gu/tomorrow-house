const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const deleteButtons = gnbSearchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeSearchHistory)
}

function openSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeSearchHistory)
  }

  gnbSearchHistory.classList.add('is-active')
}

function closeSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function deleteAllHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchInput.focus()
  closeGnbSearchHistory()
}

function deleteHistoryItem(e) {
  e.stopPropagation()
  const itemToDelete = this.parentElement
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openSearchHistory)
deleteAllButton.addEventListener('click', deleteAllHistoryItems)
deleteButtons.forEach((button) =>
  button.addEventListener('click', deleteHistoryItem)
)
