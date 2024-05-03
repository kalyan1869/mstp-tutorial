export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST
    };
};
export const fetchNewsSuccess = () => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    };
};
export const fetchNewsFailure = () => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    };
};
export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest());
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=e9e9b88ad96044288f9d291a441c1e65')
        .then((response) => response.json)
        .then((data) => {
            const news = data.articles.map((article) => {
                return {
                    title : article.title,
                    url : article.url,
                    description : article.description

                }
            });
            dispatch(fetchNewsSuccess(news));
        })
        .catch((error) => {
            dispatch(fetchNewsFailure(error.message))
        })
    }
}
