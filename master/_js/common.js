$(function () {
  $('.favorite_menus .btn_favorite').click(function () {
    $(this).siblings().slideToggle()
  })

  $('.favorite_menus .btn_mark').click(function () {
    if ($('.favorite_list li').length > 1) {
      $(this).parents('li').remove()
    } else {
      $('.favorite_list').remove()
    }
    
  })
  
  $('.contents .btn_mark').click(function () {
    $(this).toggleClass('active')
  })
})