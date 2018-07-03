module.exports = `{
  photoList {
    created_time
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
