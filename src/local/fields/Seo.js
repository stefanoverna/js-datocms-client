import File from './File';

export default class Seo {
  constructor(value, { itemsRepo, imgixHost }) {
    this.value = value;
    this.imgixHost = imgixHost;
    this.itemsRepo = itemsRepo;
  }

  get title() {
    return this.value.title;
  }

  get description() {
    return this.value.description;
  }

  get image() {
    const { imgixHost, itemsRepo } = this;

    return this.value.image
      && new File(this.value.image, { itemsRepo, imgixHost });
  }

  toMap() {
    return {
      title: this.title,
      description: this.description,
      image: this.image && this.image.toMap(),
    };
  }
}
