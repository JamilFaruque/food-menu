// variables:

const allItems = document.querySelectorAll('.single-item'),
  breakfastItems = document.querySelectorAll('.breakfast'),
  lunchItems = document.querySelectorAll('.lunch'),
  dinnerItems = document.querySelectorAll('.dinner')

// buttons:

const allBtn = document.getElementById('all'),
  breakfastBtn = document.getElementById('breakfast'),
  lunchBtn = document.getElementById('lunch'),
  dinnerBtn = document.getElementById('dinner')

allBtn.addEventListener('click',()=>{
  allItems.forEach((item)=>{
    item.classList.remove('hidden')
  })
})
breakfastBtn.addEventListener('click', () => {
  allItems.forEach((item)=>{
    item.classList.remove('hidden')
    if(!item.classList.contains('breakfast')){
      item.classList.add('hidden')
    }
  })
})
lunchBtn.addEventListener('click', () => {
  allItems.forEach((item)=>{
    item.classList.remove('hidden')
    if(!item.classList.contains('lunch')){
      item.classList.add('hidden')
    }
  })
})
dinnerBtn.addEventListener('click', (e) => {
  allItems.forEach((item)=>{
    item.classList.remove('hidden')
    if(!item.classList.contains('dinner')){
      item.classList.add('hidden')
    }
  })
})