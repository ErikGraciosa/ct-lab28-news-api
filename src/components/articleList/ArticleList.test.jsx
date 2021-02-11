import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList articles={[
      {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Igor Bonifacic",
        "title": "SpaceX SN9 Starship test ends in another fiery inferno",
        "description": "Another launch and another unsuccessful landing attempt by one of SpaceX’s Starship spacecraft. After a week of drama involving the FAA, SpaceX tested its latest Starship prototype, SN9, out of its Texas launch facility on Tuesday afternoon.   After the craft…",
        "url": "https://www.engadget.com/spacex-starship-sn9-crash-214847510.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-02/50183020-659f-11eb-9afb-dc8ccf926b73",
        "publishedAt": "2021-02-02T21:48:47Z",
        "content": "Another launch and another unsuccessful landing attempt by one of SpaceXs Starship spacecraft. After a week of drama involving the FAA, SpaceX tested its latest Starship prototype, SN9, out of its Te… [+1025 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Igor Bonifacic",
        "title": "Spin will test scooters with remote parking capabilities this spring",
        "description": "If you live in a city where e-scooter companies are allowed to operate, there’s a good chance you’ve stumbled upon a lone scooter far from its counterparts. These can be an annoyance, especially if they’re clogging up a busy sidewalk. Spin wants to address th…",
        "url": "https://www.engadget.com/spin-valet-s-200-test-boise-idaho-140048621.html",
        "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2021-01%2Fc080b280-5ff8-11eb-b7ef-62aa3b004760&client=amp-blogside-v2&signature=b83ac2a90c1a7c648e72b14f2968a952b3e8750f",
        "publishedAt": "2021-01-27T14:00:48Z",
        "content": "Spin will first test 300 S-200 scooters in Boise, Idaho starting this spring before bringing them to other markets in Europe and North America throughout 2021 and beyond. The company worked with Segw… [+892 chars]"
        }
    ]}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
