let ques = document.querySelectorAll('.ques_ans_icon');
let ans = document.querySelectorAll('.show_ans')
ques.forEach((ques, questionvalue) => {
    ques.addEventListener('click', () => {
        ans.forEach((ans, ansvalue) => {
            ans.classList.remove('active_faq_content')
            if (questionvalue == ansvalue) {
                ans.classList.toggle('active_faq_content')
            }
        })
    })
})

let humberger_icon = document.getElementById('humberger_icon');
let menu_items = document.getElementById('menu_items');
let humberger_img = document.getElementById('humberger_img');
let cross_img = document.getElementById('cross_img');
humberger_icon.addEventListener('click', () => {
    menu_items.classList.toggle('active_menu');
    humberger_img.classList.toggle('close_humberger');
    cross_img.classList.toggle('cross_img_active')


})