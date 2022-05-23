// import { Splide, SplideSlide } from '@splidejs/react-splide';
import './App.css';
import Form from './Form';
import Response from './Response';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Form />
        <div className="responses">
          <div className="header2">Responses</div>
          <Response />
          <Response />
          <Response />
          <Response />
        </div>
      </div>
      {/* <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="image1.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide> */}
    </div>
  );
}

export default App;
