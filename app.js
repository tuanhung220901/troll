let $answers = document.getElementById('web_1');
let $no = document.getElementById('no');
let $in = document.getElementById('output');
let count = 0;
$no.addEventListener('click',function(){
    $answers.classList.toggle('reverse')
    count++;
    // if(count > 2){
    //     $answers.style.display = "none";
    //     if($in.style.display == 'none'){
    //         $in.style.display = "block";
    //     }
    // }
})
let $yes = document.getElementById('yes');
//import từng cái một
// import{helloByThaiLan,helloByVietnamese} from "./hello.js"
// // import tất cả tạo với một đối tượng là something
// import *as something from "./hello.js"
// export default
import helloByVietnamese, {helloByThaiLan} from "./hello.js"
// something.helloByThaiLan();
 helloByThaiLan();
helloByVietnamese();
$yes.addEventListener('click',function(){
    $answers.style.display = "none";
})