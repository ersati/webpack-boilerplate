import photo from '../images/img2.jpg'

export default (tag) => {
    // const img = document.createElement(tag);
    // img.src = photo;
    // document.querySelector(tag).appendChild(img)
    $(tag).append(`<img src=${photo}>`);
}