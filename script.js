
// let hide =false;
// let divBtn = document.querySelector('.btn');


// function replies(id){
//     let btn =document.getElementById(id);
//     if(btn==="replies1"){
//         console.log(btn)
//         let fb =document.getElementById("feed-back1");
//         fb.classList.toggle("hide")  
//     }else if(btn==='replies2'){
//         let fb =document.getElementById("feed-back2");
//         fb.classList.toggle("hide")  
//     }else if(btn==='replies3'){
//         let fb =document.getElementById("feed-back3");
//         fb.classList.toggle("hide")  
//     }
    
    
// }

function replies(id){
    let btn =document.getElementById(id);
    let fb = document.getElementById(`feed-back${id}`)
    fb.classList.toggle("hide")
    
}

let liked =false;

function like(id){
    if(liked===false){
        let btn =document.getElementById(id);
        btn.innerHTML=`✓ Liked`;
        btn.style.font='bold';
        btn.style.border='none';
        liked=true;
    }else if(liked===true){
        let btn =document.getElementById(id);
        btn.innerHTML=`<button class="btn1"><i class="fa-solid fa-thumbs-up"> like</i></button>`;
        liked=false;
    }
  
}