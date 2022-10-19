export interface IProduct {
  onClick: any;
  id: number;
  name: string;
  price: number;
  src: string;
}
export interface IFav {
  item: IProduct;
}
export interface IFavs {
  products: IFav[];
}
