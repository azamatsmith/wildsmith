---
author: Matt Smith
date: 2018-03-08
image: running_picture.jpg
subTitle: “When you change the way you look at things, the things you look at change.” — Dr. Wayne Dyer 
tags: javascript, building
title: This iPhone Feature Can Radically Improve Your Life And Relationships
---

### This is a test

```js
export default class BlogPost extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    console.log(this.props);
    const {frontmatter, html} = this.props.data.markdownRemark;

    return (
      <div className="BlogPost">
        <h3>
          {frontmatter.author} - {frontmatter.date}
        </h3>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    );
  }
}
```

`this is inline code`

**Some text with starts**

_italics?_

![a gif](tabs.gif)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![a picture](running_picture.jpg)
