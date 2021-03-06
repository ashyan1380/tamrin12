import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// {"product":[
  // {
  //   "productName":"پنیر سفید",
  //   "price":"10",
  //   "category":"لبنیات",
  //   "image":"http://placeimg.com/640/480",
  //   "id":"1"
  // },
  // {
  //   "productName":"ماست",
  //   "price":"15",
  //   "category":"لبنیات",
  //   "image":"http://placeimg.com/640/480",
  //   "id":"2"
  // },{
//     "productName":"شیر",
//     "price":"14",
//     "category":"لبنیات",
//     "image":"http://placeimg.com/640/480",
//     "id":"3"
//   },{
//     "productName":"لباس ورزشی",
//     "price":"12",
//     "category":"لباس",
//     "image":"http://placeimg.com/640/480",
//     "id":"4"
//   },{
//     "productName":"لباس مجلسی",
//     "price":"100",
//     "category":"لباس",
//     "image":"http://placeimg.com/640/480",
//     "id":"5"
//   },{
//     "productName":"لباس فضا نوردی ناسا",
//     "price":"155",
//     "category":"لباس",
//     "image":"http://placeimg.com/640/480",
//     "id":"6"
//   },{
//     "productName":"کفش ورزشی",
//     "price":"511",
//     "category":"کفش",
//     "image":"http://placeimg.com/640/480",
//     "id":"7"
//   },{
//     "productName":"کفش پاشنه بلند",
//     "price":"445",
//     "category":"کفش",
//     "image":"http://placeimg.com/640/480",
//     "id":"8"
//   },{
//     "productName":"کفش بوکس",
//     "price":"552",
//     "category":"کفش",
//     "image":"http://placeimg.com/640/480",
//     "id":"9"
//   },{
//     "productName":"موبایل آیفون",
//     "price":"42524",
//     "category":"موبایل",
//     "image":"http://placeimg.com/640/480",
//     "id":"10"
//   },{
//     "productName":"موبایل سامسونگ",
//     "price":"455542",
//     "category":"موبایل",
//     "image":"http://placeimg.com/640/480",
//     "id":"11"
//   },{
//     "productName":"موبایل نوکیا",
//     "price":"4454",
//     "category":"مویابل",
//     "image":"http://placeimg.com/640/480"
//     ,"id":"12"
//   },{
//     "productName":"لپتاپ hp",
//     "price":"4546456",
//     "category":"لپتاپ",
//     "image":"http://placeimg.com/640/480"
//     ,"id":"13"
//   },{
//     "productName":"لپتاپ ایسوس",
//     "price":"94994",
//     "category":"لپتاپ",
//     "image":"http://placeimg.com/640/480",
//     "id":"14"
//   },{
//     "productName":"لپتاپ lenovo",
//     "price":"425254",
//     "category":"لپتاپ",
//     "image":"http://placeimg.com/640/480",
//     "id":"15"
//   },{
//     "productName":"هارد 500 گیگ",
//     "price":"5225",
//     "category":"لوازم جانبی",
//     "image":"http://placeimg.com/640/480",
//     "id":"16"
//   },{
//     "productName":"فلش 16 گیگ",
//     "price":"4343",
//     "category":"لوازم جانبی",
//     "image":"http://placeimg.com/640/480",
//     "id":"17"
//   },{
//     "productName":"فلش 23 گیگ",
//     "price":"4565",
//     "category":"لوازم جانبی",
//     "image":"http://placeimg.com/640/480",
//     "id":"18"
//   },{
//     "productName":"فلش 64 گیگ",
//     "price":"242424",
//     "category":"لوازم جانبی",
//     "image":"http://placeimg.com/640/480",
//     "id":"19"
//   },{
//     "productName":"فلش 128 گیگ",
//     "price":"5464564",
//     "category":"لوازم جانبی",
//     "image":"http://placeimg.com/640/480"
//     ,"id":"20"
//   }
// ]}