import React, { Component } from "react";
import "./InstagramCards.css";

class InstagramCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      data: null,
      image: props.image,
      likes: props.likes,
      comments: props.comments,
      caption: props.comments,
    };
  }
  componentDidMount = () => {
    this.fetchFeed();
  };
  async fetchFeed() {
    let response = await fetch(
      `https://www.instagram.com/${this.state.username}/?__a=1`
    );
    let posts = await response.json();
    console.log('post: ', posts)
    this.setState({
      data: posts,
      loaded: true
    },()=>{
        this.setState({
            image: this.state.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.display_url,
            comments: this.state.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.edge_media_to_comment.count,
            likes: this.state.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.edge_liked_by.count,
            caption: this.state.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.edge_media_to_caption.edges[0].node.text
        })
    });
  }
  render() {
    const { likes, comments, image, data, caption } = this.state;
    const { inverse, username } = this.props;
    let _caption;
    if(caption.length> 152){
        _caption = caption.toString().substring(0,151);
    }else{
        _caption=caption
    }

    console.log("caption : ", caption);
    return (
      <div>
        {inverse ? (
          <div className="row">
            <div className="col-sm-6 _column">
              <div className="caption_block">
                <div>
                  <h3>{username}</h3>
                  <p>
                    {_caption}
                  </p>
                  <div className="likes_comments">
                    <span>
                      <span className="_comments">&#128488;</span>
                      {comments}
                    </span>
                    <span>&#10084;{likes}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 _column">
              <div className="feed_block">
                <img src={image} />
                <div className="insta_icon">
                  <img src="/images/instagram-btn.png" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-6 _column">
              <div className="feed_block">
                <img src={image } />
                <div className="insta_icon">
                  <img src="/images/instagram-btn.png" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 _column">
              <div className="caption_block">
                <div>
                  <h3>@{username}</h3>
                  <p>
                  {_caption}
                  </p>
                  <div className="likes_comments">
                    <span>
                      <span className="_comments">&#128488;</span>
                      {comments}
                    </span>
                    <span>&#10084;{likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
InstagramCards.defaultProps = {
  inverse: 0,
  username: "buzzfeedfood",
  image:'/images/menu_1.jpg',
  caption: 'It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good <br />. Find the recipe from the link in our bio! : @taylormillerphoto',
  likes:'14.k',
  comments:'49'
};
export default InstagramCards;
