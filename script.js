// Navigation functionality
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")
const navItems = document.querySelectorAll(".nav-link")

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close menu when a link is clicked
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Page navigation
const pages = document.querySelectorAll(".page")

function navigateTo(sectionId) {
  // Hide all pages
  pages.forEach((page) => {
    page.classList.remove("active")
  })

  // Show the selected page
  const targetPage = document.getElementById(sectionId)
  if (targetPage) {
    targetPage.classList.add("active")

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Update active nav link
  navItems.forEach((item) => {
    item.classList.remove("active")
    if (item.getAttribute("data-section") === sectionId) {
      item.classList.add("active")
    }
  })
}

// Handle navigation link clicks
navItems.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const sectionId = link.getAttribute("data-section")
    navigateTo(sectionId)
  })
})

// Set home page as active on load
window.addEventListener("load", () => {
  navigateTo("home")
})

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})
