let URL = 'http://localhost:5000/searchKeyword';


const getQueryInURL = queryValue => {

    const reqObject = {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            Authorization: `KakaoAK 71f78f513d7f543d37d983c84b74d34f`
        }
    }
    fetch(`https://dapi.kakao.com/v2/search/web?query=${queryValue}&size=20&page=1`, reqObject)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            get(result.documents);

        })
}

function get(res) {
    let tag = '';
    for (let i of res) {

        const {
            contents,
            datetime,
            title,
            url
        } = i;

        let delFrontSlash = url.slice(url.indexOf('/') + 2);
        let delBackSlash = delFrontSlash.slice(0, delFrontSlash.indexOf('/'));

        let delT = datetime.slice(0, datetime.indexOf('T'));

        tag += `
        <div class="searching-web">
            <div class="wrapper">
                <a href="${url}">
                    <div class="title">${title}</div>
                </a>
                <div class="contents">${contents}</div>
                <div class="datetime">작성일 ${delT}</div>
                <div class="url">${delBackSlash}</div>
            </div>
        </div>
        `;

        const $ul = document.querySelector('#searchUl');
        $ul.innerHTML = tag;
    }

}

// nav비디오클릭 만드는중
function nav(res) {

    let tag = '';
    for (let i of res) {

        const {
            play_time,
            datetime,
            title,
            url,
            author,
            thumbnail
        } = i;

        let delFrontSlash = url.slice(url.indexOf('/') + 2);
        let delBackSlash = delFrontSlash.slice(0, delFrontSlash.indexOf('/'));

        tag += `
        <div class="searching-video clearfix">
            <div class="wrapper">
                <a href="${url}">
                    <div class="title">${title}</div>
                    <div class="img-box">
                        <img src="${thumbnail}" alt="미리보기">
                    </div>
                </a>
                <div class="url">${delBackSlash}</div>
                <div class="datetime">작성일:${datetime}</div>
                <div class="author">업로더:${author}</div>
            </div>
        </div>
        `;

        const $ul = document.querySelector('#searchUl');
        $ul.innerHTML = tag;
    }

}

// 이미지 클릭 만드는중
function img(res) {


    let tag = '';
    for (let i of res) {

        const {
            collection,
            datetime,
            display_sitename,
            doc_url,
            thumbnail_url
        } = i;

        tag += `
        <div style="clear:both;" class="searching">
            <div class="wrapper">
                <a href="${doc_url}">
                    <div class="collection">컬렉션:${collection}</div>
                    <img class="thumbnail_url" src="${thumbnail_url}">
                </a>
                <div class="datetime">작성일:${datetime}</div>
                <div class="display_sitename">출처:${display_sitename}</div>
            </div>
        </div>
        `;

        const $ul = document.querySelector('#searchUl');
        $ul.innerHTML = tag;
    }

}

// 블로그 클릭만드는중
function blog(res) {

    let tag = '';
    for (let i of res) {

        const {
            blogname,
            contents,
            datetime,
            title,
            url,
            thumbnail
        } = i;

        tag += `
        <div style="clear:both;" class="searching">
            <div class="wrapper">
                <a href="${url}">
                    <div class="title">${title}</div>
                    <img src="${thumbnail}" alt="미리보기">
                </a>
                <div class="contents">${contents}</div>
                <div class="blogname">블로그명:${blogname}</div>
                <div class="datetime">작성일:${datetime}</div>
            </div>
        </div>
        `;

        const $ul = document.querySelector('#searchUl');
        $ul.innerHTML = tag;
    }

}

// 카페 클릭만드는중
function cafe(res) {

    let tag = '';
    for (let i of res) {

        const {
            cafename,
            contents,
            datetime,
            url,
            title,
            thumbnail
        } = i;

        tag += `
        <div style="clear:both;" class="searching">
            <div class="wrapper">
                <a href="${url}">
                <div class="title">${title}</div>
                <img src="${thumbnail}" alt="미리보기">
                </a>
                <div class="contents">${contents}</div>
                <div class="cafename">카페명:${cafename}</div>
                <div class="datetime">작성일:${datetime}</div>
            </div>
        </div>
        `;

        const $ul = document.querySelector('#searchUl');
        $ul.innerHTML = tag;
    }

}
// 도서 클릭 만드는중
function book(res) {

    let tag = '';
    for (let i of res) {

        const {
            title,
            contents,
            datetime,
            url,
            authors,
            publisher,
            price,
            sale_price,
            thumbnail,
            status
        } = i;

        tag += `
        <div class="serching">
            <a href="${url}">
                <img src="${thumbnail}" alt="미리보기">
                <div class="title">${title}</div>
                <div class="price">정가:${price}</div>    
                <div class="sale_price">할인가:${sale_price}</div>    
            </a>
            <div class="contents">${contents}</div>
            <div class="authors">저자:${authors}</div>    
            <div class="publisher">출판사:${publisher}</div>    
            <div class="status">판매상태:${status}</div>    
            <div class="datetime">작성일:${datetime}</div>
        </div>
        `;

        const $ul = document.querySelector('#searchUl');
        $ul.innerHTML = tag;
    }

}

// 비디오 조회
const navURL = queryValue => {
    const reqObject = {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            Authorization: `KakaoAK 71f78f513d7f543d37d983c84b74d34f`
        }
    }
    fetch(`https://dapi.kakao.com/v2/search/vclip?query=${queryValue}`, reqObject)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            nav(result.documents);
        })

}

// 이미지 조회
const imgURL = queryValue => {
    const reqObject = {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            Authorization: `KakaoAK 71f78f513d7f543d37d983c84b74d34f`
        }
    }
    fetch(`https://dapi.kakao.com/v2/search/image?query=${queryValue}&`, reqObject)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            img(result.documents);
        })

}

// 블로그 조회
const blogURL = queryValue => {
    const reqObject = {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            Authorization: `KakaoAK 71f78f513d7f543d37d983c84b74d34f`
        }
    }
    fetch(`https://dapi.kakao.com/v2/search/blog?query=${queryValue}`, reqObject)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            blog(result.documents);
        })

}

// 카페 조회
const cafeURL = queryValue => {
    const reqObject = {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            Authorization: `KakaoAK 71f78f513d7f543d37d983c84b74d34f`
        }
    }
    fetch(`https://dapi.kakao.com/v2/search/cafe?query=${queryValue}`, reqObject)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            cafe(result.documents);
        })

}
// 도서 조회
const bookURL = queryValue => {
    const reqObject = {
        method:"GET",
        headers:{
            'content-type':'application/json',
            Authorization: `KakaoAK 71f78f513d7f543d37d983c84b74d34f`
        }
    }
    fetch(`https://dapi.kakao.com/v3/search/book?query=${queryValue}`, reqObject)
    .then(res => res.json())
    .then(result =>{
            console.log(result);
            book(result.documents);
    })
}

(() => {

    const usp = new URLSearchParams(location.search);
    console.log('쿼리:', usp.get('query'));
    getQueryInURL(usp.get('query'));

    // 통합검색
    document.querySelector('.naviUl').addEventListener('click', e => {
        if (!e.target.matches('.naviUl .total-search')) return;
        e.preventDefault();
        getQueryInURL(usp.get('query'));

    })
    // 비디오 
    document.querySelector('.naviUl').addEventListener('click', e => {
        if (!e.target.matches('.naviUl .video')) return;
        e.preventDefault();
        navURL(usp.get('query'));

    })
    // 이미지
    document.querySelector('.naviUl').addEventListener('click', e => {
        if (!e.target.matches('.naviUl .img ')) return;
        e.preventDefault();
        imgURL(usp.get('query'));

    })

    // 블로그
    document.querySelector('.naviUl').addEventListener('click', e => {
        if (!e.target.matches('.naviUl .blog')) return;
        e.preventDefault();
        blogURL(usp.get('query'));

    })

    // 카페
    document.querySelector('.naviUl').addEventListener('click', e => {
        if (!e.target.matches('.naviUl .cafe')) return;
        e.preventDefault();
        cafeURL(usp.get('query'));

    })
    // 도서
    document.querySelector('.naviUl').addEventListener('click', e => {
        if (!e.target.matches('.naviUl .book')) return;
        e.preventDefault();
        bookURL(usp.get('query'));
    })
})();