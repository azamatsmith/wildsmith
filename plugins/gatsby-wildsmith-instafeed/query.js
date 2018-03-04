module.exports = `{
  photoList {
    id
    images {
      thumbnail {
        height
        width
        url
      }
      low_resolution {
        height
        width
        url
      }
      standard_resolution {
        height
        width
        url
      }
    }
    caption {
      text
    }
    link
  }
}`;
