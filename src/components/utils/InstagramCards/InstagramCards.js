import React, { Component } from "react";
import "./InstagramCards.css";

class InstagramCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      comments: null,
      loaded: true,
      likes: "14.7k",
      comments: "40",
      access_token: "11045436543.01b9ce7.f9d759dc336a48a192c4c8c8a931d99c"
    };
  }
  componentDidMount = () => {
    // this.fetchFeed();
  };
  async fetchFeed() {
    let response = await fetch(
      "https://api.instagram.com/v1/users/self" +
        "/media/recent/?access_token=" +
        this.state.access_token
    );
    let posts = await response.json();
    console.log("res : ", response);
    // let comments = await this.makeCommentsList(posts.data)
    this.setState({
      data: posts.data,
      // comments: comments,
      loaded: true
    });
  }
  render() {
    const { data, likes, comments } = this.state;
    const { inverse, username, caption } = this.props;

    console.log("Data : ", data);
    return (
      <div>
        {inverse ? (
          <div className="row">
            <div className="col-sm-6 _column">
              <div className="caption_block">
                <div>
                  <h3>{username}</h3>
                  <p>
                    It’s taco Tuesday! These tacos from @jesseszewczyk have no
                    added sugars and are SO good
                    <br />
                    .Find the recipe from the link in our bio! :
                    @taylormillerphoto
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
                <img src="/images/menu_1.jpg" />
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
                <img src="/images/menu_1.jpg" />
                <div className="insta_icon">
                  <img src="/images/instagram-btn.png" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 _column">
              <div className="caption_block">
                <div>
                  <h3>{username}</h3>
                  <p>
                    It’s taco Tuesday! These tacos from @jesseszewczyk have no
                    added sugars and are SO good
                    <br />
                    .Find the recipe from the link in our bio! :
                    @taylormillerphoto
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
  username: "@buzzfeedfood"
};
export default InstagramCards;
