const ruFlag = require('../../img/svg/ru_flag.js');
const enFlag = require('../../img/svg/en_flag.js');

$(document).ready(function(){
  $('.input__select-languages').niceSelect();
  // $('.input__select-languages .current').append(ruFlag);
  $('.input__select-languages').find(`[data-value=RU]`).append(ruFlag);
  $('.input__select-languages li').click(function(){
    if(this.dataset.value == "RU"){
      //Пришлось добавить отсрочку, т.к. если просто указывать append то оригинальный 
      //скрипт niceSelect перебьёт эту команду и не выполнит.
      setTimeout(()=>{
        $(this).parent().siblings('.current').append(ruFlag);
      }, 5);
    }else{
      setTimeout(()=>{
        $(this).parent().siblings('.current').append(enFlag);
      }, 5);
    }
    console.log(this.dataset.value)
  });
  let div= '<div>150 000</div>';
})
