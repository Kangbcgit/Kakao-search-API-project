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

    let URL = 'http://localhost:5000/searchQuery';
    let resultLength = 0;
    const fetchGET = () => {
        fetch(URL)
            .then(res => res.json())
            .then(result => {
                // console.log(...result); //확인
                resultLength = [...result].length;
            })
    };

    const fetchPOST = () => {
        const reqObject = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: document.querySelector('header form input').value
            })
        }
        fetch(URL, reqObject)
            .then(res => {
                if (res.status === 201 || res.status === 200) {
                    alert('등록 성공!');
                } else {
                    alert('등록 실패!');
                }
            })
    };
    
    document.querySelector('header form input').addEventListener('keydown', e => {
        if (!e.target.matches('input')) return;

        if (e.key == 'Enter') {
            e.preventDefault();
            fetchGET();
            fetchPOST();
            window.location.href = "searchPage/search.html"
        }

        
    })
})();