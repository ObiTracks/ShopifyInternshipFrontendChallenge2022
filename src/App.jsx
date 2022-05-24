import './App.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import Form from './Form';
import Response from './Response';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Form />
        <div className="responses">
          <div className="header2">Responses</div>


          <div style={{ width: "100%"}}>


            <Splide options={{
              type: 'loop',
              perPage: 3,
              focus: 'center',
              gap: '20px'
            }}
            aria-label="My Favorite Images"
            >
              <SplideSlide >
                <Response />
              </SplideSlide>
              <SplideSlide>
                <Response />
              </SplideSlide>
              <SplideSlide>
                <Response />
              </SplideSlide>
              <SplideSlide>
                <Response />
              </SplideSlide>
            </Splide>
           
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
