// load bai bao thong tin chung cua truong
function loadNews() {
    fetch("../data/trang_chu/news.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h+= `
            <div class="new flex">
                <div class="new-col-1">
                    <a target="_blank" href="${p.link}">
                        <img src="${p.image}" alt="${p.name}">
                    </a>
                </div>
                <div class="new-col-2">
                    <a target="_blank" href="${p.link}" title="${p.name}">${p.name}</a>
                </div>
            </div>
            `;
        }
        let e = document.getElementById("new");
        e.innerHTML = h;
    })
}

// load cac ly do nen hoc tai truong
function load_ly_do() {
    fetch("../data/trang_chu/ly_do_chon_dh_mo.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h+= `
            <p>
                        <span class="ly-do-lon">
                            <span>${p.stt}. </span>
                            <span>${p.ly_do}</span>
                        </span>
                        <span class="ly-do-nho">${p.giai_thich}</span>
                    </p> 
            `;
        }
        let e = document.getElementById("ly-do-text");
        e.innerHTML = h;
    })
}

let contentLength_0 = 0;
let contentLength_1 = 0;

// thong tin tuyen sinh dai hoc chinh quy
function load_info_chinh_quy() {
    fetch("../data/trang_chu/chinh_quy.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h+= `
            <a href="${p.link}" target="_blank" class="content-item">
                                <article>
                                        <div class="thumb">
                                            <img src="${p.image}" alt="anh_chinh_quy">
                                        </div>
                                        <div class="title-info">
                                            <p>${p.title}</p>
                                        </div>
                                </article>
                            </a>
            `;
            contentLength_0++;
        }
        let e = document.getElementById("chinh-quy");
        e.innerHTML = h;
    })
}

// thong tin tuyen sinh dai hoc lien thong
function load_info_lien_thong() {
    fetch("../data/trang_chu/lien_thong.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h+= `
            <a href="${p.link}" target="_blank" class="content-item">
                                <article>
                                        <div class="thumb">
                                            <img src="${p.image}" alt="anh_chinh_quy">
                                        </div>
                                        <div class="title-info">
                                            <p>${p.title}</p>
                                        </div>
                                </article>
                            </a>
            `;
            contentLength_1++;
        }
        let e = document.getElementById("lien-thong");
        e.innerHTML = h;
    })
}

// chuyen anh slide chinh
function slide() {
    const slider = document.querySelector(".slider");
    const slideMain = document.querySelector(".slide-main");
    const slideItems = document.querySelectorAll(".slide-item");
    const nextBtn = document.querySelector(".ptn-next");
    const prevBtn = document.querySelector(".ptn-prev");
    const dotItems = document.querySelectorAll(".slide-dot");
    const slidesLength = slideItems.length;
    const slideItemWidth = slideItems[0].offsetWidth;
    let positionX = 0;
    let index = 1;

    dotItems.forEach(dot => {
        dot.addEventListener("click", function (obj){
            dotItems.forEach(element => { element.classList.remove("active") });
            obj.target.classList.add("active");
            const slideDot = parseInt(obj.target.dataset.index);
            index = slideDot;
            positionX = -100*(index-1);
            slideMain.style = `transform: translateX(${positionX}%)`;
            // console.log(index);
        })
    });


    nextBtn.addEventListener("click", function() {
        if (index >= slidesLength) 
        {
            index = slidesLength;
            // positionX = positionX + 400;
            return;
        }
        positionX = positionX - 100;
        index++;
        slideMain.style = `transform: translateX(${positionX}%)`;
        dotItems.forEach(element => { element.classList.remove("active") });
        dotItems[index-1].classList.add("active");
        // console.log(index);
    })

    prevBtn.addEventListener("click", function() {
        index--;
        if (index <= 0) 
        {
            index = 1;
            // positionX = positionX - 400;
            return;
        }
        positionX = positionX + 100;
        slideMain.style = `transform: translateX(${positionX}%)`;
        dotItems.forEach(element => { element.classList.remove("active") });
        dotItems[index-1].classList.add("active");
        // console.log(index);
    })
    
    
}

// chuyen thong tin chinh quy
function content_chinh_quy() {
    const contentMain = document.querySelector("#chinh-quy");
    const nextBtn = document.querySelector("#btn-box-next-0");
    const prevBtn = document.querySelector("#btn-box-prev-0");
    let positionX = 0;
    let index = 2;

    nextBtn.addEventListener("click", function() {
        if (index >= contentLength_0-1) {
            return;
        }
        index++;
        if (index >= contentLength_0-1)  {
            nextBtn.classList.add("active-1");
        } else {
            nextBtn.classList.remove("active-1");
        }
        prevBtn.classList.remove("active-1");
        positionX = positionX - 33.3333;
        contentMain.style = `transform: translateX(${positionX}%)`;
        // console.log(index);
        // console.log(contentLength);
    })

    prevBtn.addEventListener("click", function() {
         if (index <= 2) 
        {
            return;
        }
        positionX = positionX + 33.3333;
        index--;
        if (index <= 2) {
            prevBtn.classList.add("active-1");
        } else {
            prevBtn.classList.remove("active-1");
        }
        nextBtn.classList.remove("active-1");
        contentMain.style = `transform: translateX(${positionX}%)`;
        // console.log(index);
    }) 
}

function content_lien_thong() {
    const contentMain = document.querySelector("#lien-thong");
    const nextBtn = document.querySelector("#btn-box-next-1");
    const prevBtn = document.querySelector("#btn-box-prev-1");
    let positionX = 0;
    let index = 2;

    nextBtn.addEventListener("click", function() {
        if (index >= contentLength_1-1) {
            return;
        }
        index++;
        if (index >= contentLength_1-1)  {
            nextBtn.classList.add("active-1");
        } else {
            nextBtn.classList.remove("active-1");
        }
        prevBtn.classList.remove("active-1");
        positionX = positionX - 33.3333;
        contentMain.style = `transform: translateX(${positionX}%)`;
        // console.log(index);
        // console.log(contentLength);
    })

    prevBtn.addEventListener("click", function() {
         if (index <= 2) 
        {
            return;
        }
        positionX = positionX + 33.3333;
        index--;
        if (index <= 2) {
            prevBtn.classList.add("active-1");
        } else {
            prevBtn.classList.remove("active-1");
        }
        nextBtn.classList.remove("active-1");
        contentMain.style = `transform: translateX(${positionX}%)`;
        // console.log(index);
    }) 
}

window.onload = function() {
    loadNews();
    load_ly_do();
    load_info_chinh_quy();
    load_info_lien_thong();
    slide();
    content_chinh_quy();
    content_lien_thong();
};