import React from "react";

export default class ImgSlider extends React.Component {
  state = {
     
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61p2jaL9YOL._AC_SY741_.jpg",
      "https://images.everyeye.it/img-notizie/tokyo-ghoul-ryoii-ich-realizza-fedelissimo-cosplay-ken-kaneki-albino-v3-461758.jpg",
      "https://nicolecaoyonan.files.wordpress.com/2017/08/kaneki1.jpg?w=640",
      "https://besthqwallpapers.com/Uploads/13-1-2019/77362/thumb2-ken-kaneki-smile-tokyo-ghoul-characters-protagonist-artwork.jpg",
    ],
    idx: 0

  };
  next = () => {
    this.setState({
    
     idx: this.state.idx + 1
    });
  };
  prev= () =>{
      console.log(this.state)
      this.setState({
         idx: this.state.idx -1
      })
  }
  render() {
    return (
      <div>
          <button onClick={this.prev}>Previuos</button>
        <img
          style={{
            width: 100,
            height: 100,
          }}
          src={this.state.images[this.state.idx]}
          alt=""
        />
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}
