import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousels.css"
function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousal1"
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_dp_bbh_cc_up60_nov_994x3991667546414083.webp"
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carousal"
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_soi_19thjan1674046450680.webp"
          alt="Second slide"
        />
       
      </Carousel.Item>

      <Carousel.Item w="100%" >
        <img
          className="carousal1"
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thjan1674046582770.webp"
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal"
          src="https://cdn.fcglcdn.com/brainbees/banners/merchf_hp_default_soi23_buy2_1701231673929959347.webp"
          alt="four slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal1"
          src="https://cdn.fcglcdn.com/brainbees/banners/toffyhouse_mkt_po5_all_6_toffy401673506694214.webp"
          alt="fifith slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal"
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_happy_hour_desktop1673502140093.webp"
          alt="sixth slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal1"
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thjan1674046582770.webp"
          alt="seven slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal"
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_merch_p10_harry_desktop1674057444324.webp"
          alt="eight slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal1"
          src="https://cdn.fcglcdn.com/brainbees/banners/makhana_for_babies_desktop_2022525132121674034595104.webp"
          alt="nine slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousal"
          src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_flat40_soi_desktop1673527211419.webp"
          alt="Ten slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;