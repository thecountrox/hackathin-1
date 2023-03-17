const data = {
    "movie_1":{
        "title": "Movie 1",
        "thumbnail": "some_thumbnail_1.jpeg"
    },
    "movie_2":{
        "title": "Movie 2",
        "thumbnail": "some_thumbnail_2.jpeg"
    },
    "movie_3":{
        "title": "Movie 3",
        "thumbnail": "some_thumbnail_3.jpeg"
    }
}

const thumbnailsContainer = document.querySelector('.thumbnails');

for (const [key, value] of Object.entries(data)) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');

    const image = document.createElement('img');
    image.src = value.thumbnail;
    image.alt = value.title;
    thumbnail.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = value.title;
    thumbnail.appendChild(title);

    thumbnailsContainer.appendChild(thumbnail);
}
