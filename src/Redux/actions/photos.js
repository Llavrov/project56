import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADING',
    payload,
})

export const fetchPhotos = (sortBy = "all") => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('https://llavrov.github.io/project56/photos.json').then(({ data }) => {
        let items = data.photos;
        switch (sortBy) {
            case 'Projects':
                let projects = [];
                items.map((photo) => {
                    if (photo.type === 'projects' ) projects.push(photo);
                })
                dispatch(setPhotos(projects));

                break;
            case 'Style':
                let styles = [];
                items.map((photo) => {
                    if (photo.type === 'style' ) styles.push(photo);
                })
                dispatch(setPhotos(styles));

                break;
            case 'Sport':
                let sports = [];
                items.map((photo) => {
                    if (photo.type === 'sport' ) sports.push(photo);
                })
                dispatch(setPhotos(sports));

                break;
            case 'Friends':
                let friends = [];
                items.map((photo) => {
                    if (photo.type === 'friends' ) friends.push(photo);
                })
                dispatch(setPhotos(friends));

                break;
            default:
                dispatch(setPhotos(items));
                break;
        }
    });
};


export const setPhotos = (items) => ({
    type: 'SET_PHOTOS',
    payload: items,

});