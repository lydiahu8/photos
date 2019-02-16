import React from 'react';
import ReactDOM from 'react-dom';
import {
  configure,
  mount,
  shallow,
  render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  wrap,
} from 'module';
import App from '../client/src/components/App';
import Photo from '../client/src/components/Photo';
import PhotoBanner from '../client/src/components/PhotoBanner';
import PhotoCarousel from '../client/src/components/PhotoCarousel';
import PhotoCarouselLeftArrow from '../client/src/components/PhotoCarouselLeftArrow';
import PhotoCarouselRightArrow from '../client/src/components/PhotoCarouselRightArrow';
import PhotoDisplay from '../client/src/components/PhotoDisplay';
import PhotoModal from '../client/src/components/PhotoModal';
import SaveThisRestaurantButton from '../client/src/components/SaveThisRestaurantButton';

configure({
  adapter: new Adapter(),
});

describe('App', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  it('should render PhotoBanner without throwing an error', () => {
    expect(shallow(<App />).find('PhotoBanner').exists()).toBe(true);
  });

  it('should render bookmark button without throwing an error', () => {
    expect(shallow(<App />).find('SaveThisRestaurantButton').exists()).toBe(true);
  });
});
