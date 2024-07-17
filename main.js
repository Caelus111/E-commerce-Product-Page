const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const cart = document.getElementById("cart");
const count = document.getElementById("count");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const cartContent = document.getElementById("cart-content");
const cartBtn = document.getElementById("cart-btn");
const cartMenu = document.getElementById("cart-menu");

// Counter
function updateCounter(currentCount) {
  count.textContent = currentCount;
}

function incrementCounter() {
  const currentCount = +count.textContent;
  updateCounter(currentCount + 1);
}

function decrementCounter() {
  const currentCount = +count.textContent;
  if (currentCount > 1) {
    updateCounter(currentCount - 1);
  }
}

function initializeCounter() {
  minusBtn.addEventListener("click", decrementCounter);
  plusBtn.addEventListener("click", incrementCounter);

  updateCounter(1);
}

initializeCounter();

// Cart
function showCartDetails() {
  cartMenu.classList.remove("hidden");

  cartContent.innerHTML = `
           <div class="flex flex-col items-start justify-center space-y-3">
                  <!-- product details -->
                  <div class="flex flex-row items-center justify-between w-full p-3 space-x-4">
                    <!-- product thumbnail -->
                    <img
                      class="size-10"
                      src="img/image-product-1-thumbnail.jpg"
                      alt=""
                    />
                    <div class="flex flex-col items-start justify-center text-black ">
                      <p class="font-light">Fall Limited Edition Sneakers</p>
                      <p class="font-light">$125.00 x ${+count.textContent} <span class="font-bold text-black">$${
    +count.textContent * 125
  }.00</span></p>
                    </div>
                    <img id="delete" class="ml-auto cursor-pointer" src="img/icon-delete.svg" alt="" />
                  </div>
                  <button class=" text-black bg-Orange rounded-lg p-3 w-full hover:bg-orange-300">Checkout</button>
                </div>
  `;

  const deleteBtn = document.getElementById("delete");
  deleteBtn.addEventListener("click", () => {
    cartContent.innerHTML = `<p>Your cart is empty</p>`;
  });
}

cart.addEventListener("click", () => {
  cartMenu.classList.toggle("hidden");
});

cartBtn.addEventListener("click", showCartDetails);

// LightBox
const mainImg = document.getElementById("main-img");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("close");
const lightboxImg = document.querySelector(".lightbox-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const lightBox = () => {
  mainImg.addEventListener("click", () => {
    lightbox.classList.toggle("md:flex");
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.toggle("md:flex");
  });
};

lightBox();

// ShowSlides
function showSlides(slide) {
  let i;
  const slides = document.querySelectorAll(".main-img");
  const mainSlides = document.querySelectorAll(".main");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainThumbnails = document.querySelectorAll(".main-thumbnail");

  if (slide > slides.length) {
    slideIndex = 1;
  }
  if (slide < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < mainSlides.length; i++) {
    mainSlides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  for (i = 0; i < mainThumbnails.length; i++) {
    mainThumbnails[i].className = mainThumbnails[i].className.replace(
      " active",
      ""
    );
  }
  mainSlides[slideIndex - 1].style.display = " block";
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
  mainThumbnails[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Menu
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,0.5)";
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
