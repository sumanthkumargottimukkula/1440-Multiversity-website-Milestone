let searchEl = document.getElementById("navBtn1");
let cancelEl = document.getElementById("navBtn2");
let searchBarEl = document.getElementById("searchBar");
searchEl.addEventListener("click",function(){
    searchEl.classList.toggle("toggleSearchBtn")
    cancelEl.classList.toggle("toggleSearchBtn")
    searchBarEl.classList.toggle("search_visible")
    
})

cancelEl.addEventListener("click",function(){
    cancelEl.classList.toggle("toggleSearchBtn")
    searchBarEl.classList.toggle("search_visible")
    searchEl.classList.toggle("toggleSearchBtn")
})

let expand_el = document.getElementById("expandBtn");
let collapse_el = document.getElementById("collapseBtn");
let expanded_text_el = document.getElementById("expandedContent");

expand_el.addEventListener("click",function(){
    expand_el.classList.toggle("hideUnhide")
    collapse_el.classList.toggle("hideUnhide")
    expanded_text_el.classList.toggle("hideUnhide")
})

collapse_el.addEventListener("click",function(){
    collapse_el.classList.toggle("hideUnhide")
    expand_el.classList.toggle("hideUnhide")
    expanded_text_el.classList.toggle("hideUnhide")
})

let menu_btn_el = document.getElementById("menuBtn");
let close_btn_el = document.getElementById("closeBtn");
let menu_section_el = document.getElementById("dropdownMenuSection");

menu_btn_el.addEventListener("click",function(){
    menu_btn_el.classList.toggle("hideUnhide")
    menu_section_el.classList.toggle("hideUnhide")
    close_btn_el.classList.toggle("hideUnhide")

})

close_btn_el.addEventListener("click",function(){
    menu_btn_el.classList.toggle("hideUnhide")
    menu_section_el.classList.toggle("hideUnhide")
    close_btn_el.classList.toggle("hideUnhide")
})

let experience_btn_el = document.getElementById("experienceBtn");
let experienceContainer_el = document.getElementById("experienceContainer");
experience_btn_el.addEventListener("click",function(){
    experienceContainer_el.classList.toggle("experience_drp")

})








