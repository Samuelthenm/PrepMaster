// Initialize AOS animations
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    })
  } else {
    console.warn("AOS is not defined. Make sure AOS library is included.")
  }

  // Add event listeners for the new CTA buttons
  const heroModalButton = document.getElementById("hero-modal-button")
  const ctaModalButton = document.getElementById("cta-modal-button")

  if (heroModalButton) {
    heroModalButton.addEventListener("click", () => {
      const modalEl = document.getElementById("search-modal")
      modalEl.classList.add("is-active")
    })
  }

  if (ctaModalButton) {
    ctaModalButton.addEventListener("click", () => {
      const modalEl = document.getElementById("search-modal")
      modalEl.classList.add("is-active")
    })
  }

  // Count up animation for stats
  const countUpElements = document.querySelectorAll(".count-up")

  const options = {
    threshold: 0.5,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const targetValue = Number.parseInt(target.getAttribute("data-target"))
        let count = 0
        const duration = 2000 // 2 seconds
        const interval = Math.floor(duration / targetValue)

        const counter = setInterval(() => {
          count++
          target.textContent = count

          if (count >= targetValue) {
            clearInterval(counter)
          }
        }, interval)

        observer.unobserve(target)
      }
    })
  }, options)

  countUpElements.forEach((element) => {
    observer.observe(element)
  })

  // Add hover animations to recipe cards
  const recipeCards = document.querySelectorAll(".created-buttons")
  recipeCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })
  })

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add animation to the hero image
  const heroImage = document.querySelector(".hero-image")
  if (heroImage) {
    setInterval(() => {
      heroImage.classList.add("pulse")
      setTimeout(() => {
        heroImage.classList.remove("pulse")
      }, 2000)
    }, 5000)
  }
})

// Add event listener to recipe images to show prep time
document.addEventListener("DOMContentLoaded", () => {
  const recipePicture = document.getElementById("recipe-picture")

  if (recipePicture) {
    recipePicture.addEventListener("load", function () {
      // Only show prep time overlay when an image is loaded
      const prepTimeElement = document.querySelector(".prep-time")
      if (prepTimeElement && this.src) {
        prepTimeElement.style.display = "block"
      } else if (prepTimeElement) {
        prepTimeElement.style.display = "none"
      }
    })
  }
})

// Enhance the swiper initialization with more dynamic options
document.addEventListener("DOMContentLoaded", () => {
  // This will be called after the original swiper initialization in Script.js
  if (typeof TrendingSlider !== "undefined") {
    // Add mousewheel control
    TrendingSlider.params.mousewheel = true
    TrendingSlider.update()

    // Add keyboard control
    TrendingSlider.params.keyboard = {
      enabled: true,
      onlyInViewport: true,
    }
    TrendingSlider.update()

    // Add autoplay
    TrendingSlider.params.autoplay = {
      delay: 3000,
      disableOnInteraction: false,
    }
    TrendingSlider.autoplay.start()
  } else {
    console.warn("TrendingSlider is not defined. Make sure Swiper library and initialization are included.")
  }
})
