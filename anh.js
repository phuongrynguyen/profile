let anh = {
  Anh: [
    {
      img: 'avatar.png',
    },
    {
      img: 'cover.png',
    },
  ],
  
  comAnh: function(){
    let htmlAnh = this.Anh.map(ms =>{
      return `
      <img src="${ms.img}">
      `;
    });
    document.querySelector(".gallery").innerHTML = htmlAnh.join('');
  },
  
  starAnh: function(){
    this.comAnh();
  }
}

anh.starAnh();