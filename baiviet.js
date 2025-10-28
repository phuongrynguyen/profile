let baiviet = {
  Baiviet: [
    {
      avatar: 'avatar1.png',
      name: 'Vy Xinh Gái',
      time: '15 phút • trước',
      capnhat: 'đã cập nhật ảnh đại diện của cô ấy.',
      txt: 'tiền em tự kiếm được, đồ em tự mua được, có nhà, có xe, ip17 pro max đều có vậy anh có hay không em đâu quan tâm',
      img: 'cover.png',
      iconLike: '😍😍',
      iconTxt: '7',
      binhluan: '50 bình luận mới',
    },
  ],
  
  combaiviet: function(){
    let htmlBaiviet = this.Baiviet.map(msg => {
      return `
      <div class="post">
  <div class="post-header">
    <div class="user-info">
      <img src="${msg.avatar}" alt="Avatar">
      <div>
        <div class="user-name">${msg.name}</div>
        <div class="post-time">${msg.time}</div>
      </div>
    </div>
  </div>

  <div class="post-content">
    ${msg.capnhat}
  </div>
  <div class="txt">
    <p class="desc" style="padding-left: 1rem">${msg.txt}</p>
  </div>
  <div class="post-image">
    <img src="${msg.img}">
  </div>

  <div class="post-footer">
    <div class="reactions">
      <span>${msg.iconLike}</span>
      <span>${msg.iconTxt}</span>
    </div>
    <div>${msg.binhluan}</div>
  </div>
</div>
      `;
    });
    document.querySelector(".baiviet").innerHTML = htmlBaiviet.join('');
  },
  
  starbaiviet: function(){
    this.combaiviet();
  }
}

baiviet.starbaiviet();