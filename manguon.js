let data = true;

let manguon = {
  Manguon: [
    {
      img: '',
      theloai: 'Source Web',
      tieude: '',
      mota: '',
      clock: '1 giây trước',
      player: '100',
      gia: '50.000₫',
      
      /* check icon hot/new */
      check_icon: {
        checK: data,
        hot: 'hot.gif',
        news: 'new.gif',
      },
      
      /* check trạng thái free/trả phí */
      check_trangthai: {
        trangthai: data,
        free: 'Free',
        coin: 'Trả phí',
      },
      
      /* check người đăng */
      check_nguoidang: {
        nguoidang: data,
        bangvy: 'băng vy',
        thue: 'ẩn danh',
      },
      
      /* check admin - thành viên */
      check_quyen: {
        quyen: data,
        admin: 'admin',
        tv: 'thành viên',
      },
      
      /* check color */
      check_color: {
        color: data,
        reg: 'crimson',
        sp: 'springgreen'
      },
      
      /* check nút */
      check_nut: {
        nut: data,
        mua: 'Mua',
        nhan: 'Nhận',
      },
    },
  ],
  
  comManguon: function(){
    let htmlManguon = this.Manguon.map(m =>{
      
      
      let mtrangthai = m.check_trangthai.trangthai ? m.check_trangthai.free : m.check_trangthai.coin;
      
      let mNguoidang = m.check_nguoidang.nguoidang ? m.check_nguoidang.thue : m.check_nguoidang.bangvy;

      let mquyen = m.check_quyen.quyen ? m.check_quyen.tv : m.check_quyen.admin;
      
      let mNut = m.check_nut.nut ? m.check_nut.nhan : m.check_nut.mua;
      
      let oet = m.check_icon.checK ? m.check_icon.news : m.check_icon.hot;
      
      let colors = m.check_color.color ? m.check_color.sp : m.check_color.reg;
      
      return `
      <div class="card-container">
      <div class="card">
      <div class="card-img">
        <img src="${m.img}">
      </div>
      <div class="card-content">
        <span class="tag">● ${m.theloai}</span>
        <h3 class="title">${m.tieude} <img src="${oet}"></h3>
        <p class="desc">${m.mota}</p>
        <b class="b">Trạng thái: <span style="color: ${colors}">${mtrangthai}</span></b>
        <b class="b">Người đăng: <span style="color: ${colors}"> ${mNguoidang} [ <span style="color: ${colors}"> ${mquyen} </span> ]</span></b>
        <div class="card-info">
          <span><i class="fa-solid fa-alarm-clock"></i> ${m.clock} </span>
          <span id="span" style="text-align: center;"><i class="fa-solid fa-circle-user"></i> ${m.player} </span>
          <span><i class="fa-solid fa-coins"></i> ${m.gia} </span>
          <span class="span"> ${mNut} </span>
        </div>
      </div>
    </div>
  </div>
      `;
    });
    rg();
   function rg(){
     let iu = true;
     iu = !iu;
     iu ? show() : opshow();
   }
   
   function show(){
     document.querySelector(".manguon").innerHTML = htmlManguon.join('');
   }
   
   function opshow(){
     document.querySelector(".manguon").innerHTML = '<p style="text-align: center;">mã nguồn chưa được cập nhật</p>';
   }
  },
  
  starManguon: function(){
    this.comManguon();
  }
}

manguon.starManguon();