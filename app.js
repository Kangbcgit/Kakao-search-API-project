(() => {
    // const reqObject = {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json',
    //         Authorization: 'KakaoAK 71f78f513d7f543d37d983c84b74d34f'
    //     }
    // }
    // fetch('https://dapi.kakao.com/v2/search/web?query=헬로', reqObject)
    //     .then(res => {
    //         console.log(res.json());
    //     })


    // const query= document.querySelector('header form input').value;
    // console.log('q:',query);

    document.querySelector('header form input').addEventListener('keydown', e => {
        if (!e.target.matches('input')) return;

        if (e.key == 'Enter') {
            e.preventDefault();
            window.location.href = "searchPage/search.html?query=" + document.querySelector('header form input').value;

            document.querySelector('form').submit();
        }
    })
})();