const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

console.log(gnbSearchHistoryList)

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
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeSearchHistory)
  }
}

function deleteAllHistory() {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchInput.focus()
  gnbSearchHistory.classList.remove('is-active')
}

gnbSearchInput.addEventListener('focus', openSearchHistory)
deleteAllButton.addEventListener('click', deleteAllHistory)
