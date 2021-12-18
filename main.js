import Header from './component/Header.js'

import Bedroom from "./component/Bedroom.js";


let header = new Header();

document.getElementById("app").appendChild(header.render());



let bkcc = new Bedroom(
  "./img/ban khach chung cu/1.jpg",
  "Bàn khách chung cư",
  "2,500,000.00đ"
);
let bkgd = new Bedroom(
  "./img/ban khach gia dinh/2.jpg",
  "Bàn khách gia đình",
  "2,500,000.00đ"
);
let btd = new Bedroom(
  "./img/ban trang diem/1.jpg",
  "Bàn trang điểm",
  "2,500,000.00đ"
);
let dgd = new Bedroom(
  "./img/do gia dung/1.jpg",
  "Đồ gia dụng",
  "2,500,000.00đ"
);
let nvs = new Bedroom(
  "./img/nha ve sinh/1.jpg",
  "Nhà vệ sinh",
  "2,500,000.00đ"
);
let nt = new Bedroom(
  "./img/noi that vp/1.jpg",
  "Nội thất văn phòng",
  "2,500,000.00đ"
);
let sofa = new Bedroom("./img/sofa/1.jpg", "Sofa", "2,500,000.00đ");

let container = document.getElementById('container')
container.appendChild(bkcc.render());
container.appendChild(bkgd.render());
container.appendChild(btd.render());
container.appendChild(dgd.render());
container.appendChild(nvs.render());
container.appendChild(nt.render());
container.appendChild(sofa.render());

document.getElementById("app").appendChild(container);

container.setAttribute('class', "grid grid-cols-4")


document
  .getElementById("app")
  .setAttribute(
    "class",
    "w-2/3 flex flex-col justify-center items-center m-auto mb-15 mx-auto"
  );

