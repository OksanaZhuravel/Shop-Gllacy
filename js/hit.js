class HitItem {
  constructor(mintitle, img, price, title) {
    this.mintitle = mintitle;
    this.img = img;
    this.price = price;
    this.title = title;
  }
  render() {
    return `<li class="hit-list-item ">
                <img class="hit-list-img" src="${this.img}" alt="${this.mintitle}" width="267" height="267">
                <p class="hit-list-prise">
                  <span class="hit-list-prise-number">${this.price}</span>
                  <span class="hit-list-prise-excerpt">/кг</span>
                </p>
                <p class="hit-list-text">
                  <a href="#">${this.title}</a>
                </p>
                <a href="#" class="hit-list-link visually">Быстрый просмотр</a>
              </li>`
  }
}
class HitList {
  constructor() {
    this.hits = [];
  }
  fetchHits() {
    this.hits = [
      {
        mintitle: 'Сливочное с апельсином'
        , img: 'img/1.jpg'
        , price: 310
        , title: 'Сливочное с апельсиновым джемом и цитрусовой стружкой'
      }, {
        mintitle: 'Сливочно-кофейное'
        , img: 'img/2.jpg'
        , price: 380
        , title: 'Сливочно-кофейное с кусочками шоколада'
      }, {
        mintitle: 'Сливочно-клубничное'
        , img: 'img/3.jpg'
        , price: 355
        , title: 'Сливочно-клубничное с присыпкой из белого шоколада'
      }
, ];
  }
  render() {
    let listHtml = '';
    this.hits.forEach(hit => {
      const hitItem = new HitItem(hit.mintitle, hit.img, hit.price, hit.title);
      listHtml += hitItem.render();
    });
    document.querySelector('.hit-list').innerHTML = listHtml;
  }
}
const list =new HitList();
list.fetchHits();
list.render();
