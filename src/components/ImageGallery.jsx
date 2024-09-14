// ImageGallery.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Nature', 'Technology', 'Animals'],
      images: [
        { id: 1, category: 'Nature', url: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' },
        { id: 2, category: 'Nature', url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80' },
        { id: 3, category: 'Nature', url: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80' },
        { id: 4, category: 'Nature', url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg' },
        { id: 5, category: 'Technology', url: 'https://thumbs.dreamstime.com/z/fingerprint-scanning-searching-identity-check-blue-cyber-hi-tech-background-technology-safety-concept-id-scanner-330693631.jpg' },
        { id: 6, category: 'Technology', url: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg' },
        { id: 7, category: 'Technology', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAJhy-osJOn00HCksqMs3_jg9pEOCwGWPaw&s' },
        { id: 8, category: 'Animals', url: 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg' },
        { id: 9, category: 'Animals', url: 'https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg' },
        { id: 10, category: 'Animals', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg' },
        { id: 11, category: 'Animals', url: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JvYl9yYXdwaXhlbF9zdHVkaW9fcGhvdG9fb2ZfYV9vcmFuZ3V0YW5fZnVsbF9ib2R5X2lzb2xhdGVkX29uX182Nzc4MjQxOS1lYTFjLTQ1ODItYmExMy0xMzYzZDY0MDU2MzYtNXgtaHEtc2NhbGUtNV8wMHgtam9iMTg5NC0wMS5qcGc.jpg' },
      ].map((image) => ({ ...image, order: Math.random() })),
      selectedCategory: 'All',
    };
  }

  filteredImages() {
    if (this.state.selectedCategory === 'All') {
      return this.state.images.sort((a, b) => a.order - b.order);
    }
    return this.state.images.filter((image) => image.category === this.state.selectedCategory).sort((a, b) => a.order - b.order);
  }

  handleCategoryChange(category) {
    this.setState({ selectedCategory: category });
  }

  render() {
    return (
      <div className="container">
        <div className="image-gallery">
          <div className="filter-menu">
            <button className="btn btn-dark px-4 mx-2" onClick={() => this.handleCategoryChange('All')}>All</button>
            <button className="btn btn-dark px-4 mx-2" onClick={() => this.handleCategoryChange('Nature')}>Nature</button>
            <button className="btn btn-dark px-4 mx-2" onClick={() => this.handleCategoryChange('Technology')}>Technology</button>
            <button className="btn btn-dark px-4 mx-2" onClick={() => this.handleCategoryChange('Animals')}>Animals</button>
          </div>
          <div className="image-grid row">
            {this.filteredImages().map((image) => (
              <div key={image.id} className="col-md-3" style={{width:'32%'}}>
                <img src={image.url} alt={image.category} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;