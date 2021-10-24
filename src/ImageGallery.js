import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';



class ImageGallery extends Component {
    state = {
    searchValue: '',
    searchResults: [],
    page: 1,
  };

    componentDidUpdate(prevProps, prevState) {
       
        const prevValue = prevProps.searchValue;
        const currentValue = this.props.searchValue;
      if (prevValue !== currentValue) {
          fetch(`https://pixabay.com/api/?q=${currentValue}&page=1&key=23105457-2163ce7f6d7cdb7b080badb2a&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(result => this.setState({
            searchResults: result.hits}))
    }
      
  };



    render() {
        return (
            <ul className="ImageGallery">
            {this.state.searchResults.map(
              ({ id, webformatURL, largeImageURL, tags }) => {
                    return (
                    
                        <ImageGalleryItem
                            key={id}
                            preiew={webformatURL}
                            largeImage={largeImageURL}
                            // openModal={toggleModal}
                            // getImage={getTarget}
                            desc={tags}
                        />
                 
                
                );
              },
            )}
          </ul>
        )
    }
}

export default ImageGallery;
