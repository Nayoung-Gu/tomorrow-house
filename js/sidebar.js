const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')
const sidebarMenuButton = document.querySelector('.is-menu')

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)

sidebarOverlay.addEventListener('click', closeSidebar)
