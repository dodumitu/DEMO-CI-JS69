export default class  Header {
    $header;
    $headerCont
    $logo;    
    $duan;
    
    $banggia;
    
    $spDropdown
    $spDropdownct

    $sanpham;
    $phongkhach;
    $phongan;
    $phongngu;
    
    $khuyenmai;
    $tintuc;
    $cocautochuc;
    $lienhe;
    
    constructor(){
      this.$header = document.createElement('div')
      this.$header.setAttribute('class', "bg-white w-screen")

      this.$headerCont = document.createElement('div')
      this.$headerCont.setAttribute('class', "w-2/3 m-auto flex justify-around items-center text-lg text-slate-50 ")
      

      this.$logo = document.createElement("img");
      this.$logo.src = "https://nt11.mediawz.com/wp-content/uploads/2021/07/Nt11.png";
      this.$logo.setAttribute("class", "w-40 h-14 m-10");

      this.$duan = document.createElement('a')
      this.$duan.href = ''
      this.$duan.textContent = "Dự án"

      this.$banggia = document.createElement('a')
      this.$banggia.href = "";
      this.$banggia.textContent = "Bảng giá"

      this.$sanpham = document.createElement('button')
      this.$sanpham.type = 'button'
      this.$sanpham.textContent = "Sản Phẩm"
      this.$sanpham.setAttribute('class' , "border-none ")

      this.$phongkhach = document.createElement('a')
      this.$phongkhach.href = "";
      this.$phongkhach.textContent = "Phòng khách"
      this.$phongkhach.setAttribute('class', "block")
      
      this.$phongan = document.createElement('a')
      this.$phongan.href = "";
      this.$phongan.textContent = "Phòng ăn"
      this.$phongan.setAttribute('class', "block")

      this.$phongngu = document.createElement('a')
      this.$phongngu.href = "";
      this.$phongngu.textContent = "Phòng ngủ"
      this.$phongngu.setAttribute('class', "block")

      this.$spDropdown = document.createElement('div')
      this.$spDropdown.setAttribute('class', 'relative inline-block')

      this.$spDropdownct = document.createElement('div')
      this.$spDropdownct.setAttribute('class', ' absolute hidden hover:block w-auto h-auto')



      this.$khuyenmai = document.createElement('a')
      this.$khuyenmai.href = "";
      this.$khuyenmai.textContent = "Khuyến mãi"

      this.$tintuc = document.createElement('a')
      this.$tintuc.href = "";
      this.$tintuc.textContent = "Tin tức"

      this.$cocautochuc = document.createElement('a')
      this.$cocautochuc.href = "";
      this.$cocautochuc.textContent = "Cơ cấu tổ chức"

      this.$lienhe = document.createElement('a')
      this.$lienhe.href = "";
      this.$lienhe.textContent = "Liên hệ"
    }
    render(){
      this.$spDropdownct.appendChild(this.$phongkhach)
      this.$spDropdownct.appendChild(this.$phongan)
      this.$spDropdownct.appendChild(this.$phongngu)

      this.$spDropdown.appendChild(this.$sanpham)
      this.$spDropdown.appendChild(this.$spDropdownct)

      this.$headerCont.appendChild(this.$logo)
      this.$headerCont.appendChild(this.$duan)
      this.$headerCont.appendChild(this.$banggia)
      this.$headerCont.appendChild(this.$spDropdown)
      this.$headerCont.appendChild(this.$khuyenmai)
      this.$headerCont.appendChild(this.$tintuc)
      this.$headerCont.appendChild(this.$cocautochuc)
      this.$headerCont.appendChild(this.$lienhe)

      
      this.$header.appendChild(this.$headerCont)

      return this.$header

    }
    }
    
