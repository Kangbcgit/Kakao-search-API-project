let URL = 'http://localhost:5000/searchQuery';


const getLocalhost = () => {
    fetch(URL)
        .then(res => res.json())
        .then(result => {
            const reqObject = {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    Authorization: `KakaoAK 71f78f513d7f543d37d983c84b74d34f`
                }
            }
            fetch(`https://dapi.kakao.com/v2/search/web?query=멍멍이`, reqObject)
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        })








}
// const reqObject = {
//     method: 'DELETE'
// }

// fetch(`${URL}/1`, reqObject)
//     .then(res => {
//         console.log(res.status);
//     })
// })









(() => {
    getLocalhost();
})();