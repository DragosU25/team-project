!function(){var e;(e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")}).openModalBtn.addEventListener("click",(function(){e.modal.style.visibility="visible"})),e.closeModalBtn.addEventListener("click",(function(){e.modal.style.visibility="hidden"}));var n=document.getElementById("modal"),t=document.getElementById("openModalBtn"),d=document.getElementById("closeModal");t.addEventListener("click",(function(){n.style.display="block"})),d.addEventListener("click",(function(){n.style.display="none"})),window.addEventListener("click",(function(e){e.target==n&&(n.style.display="none")}))}();
//# sourceMappingURL=index.dd87b45e.js.map
