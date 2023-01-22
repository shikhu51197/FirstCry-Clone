import React from 'react'
import "./Main.css"

// import image1 from "../Images/img1.jpg"


import { border } from '@chakra-ui/react'
import { useRef } from "react";
function Main() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  return (
    <div className="bib">
    <div className="mainPage">
 <h2 style={{ marginBottom: "20px",marginTop:"10px",fontSize:"21px",fontWeight:"600",textAlign:'center' }}>PREMIUM BIOTIQUES</h2>

 <div className="cardDiv">
    <a href="#">
        <div className="card"   w={{
        base: "50%",
        sm: "40%",
        md: "30%",
        xl: "20%",
        "2xl": "20%",
      }}
      ml={"10%"}
      mb={6} >
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28862.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>
            Kids Favourit | Up To 24M</p>
          <p className='pera'> Collection that suits their style </p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28870.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>Ready For Some Fun | Up to 12+Y</p>
          <p className='pera'>Onesies,Sets,T-Shirts & More</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28863.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}> Trendiest Fastion Fever | 2- 4Y</p>
          <p className='pera'>Stylish Sets Rompers,Dresses & More</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28874.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>Good Food For Kid</p>
          <p className='pera'>Organic & Preservative Free Snaking</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28871.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>The Irresistible Deal | Up to 10+Y</p>
          <p className='pera'>Onesies Sets,Dresses & More</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28873.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>Suit it Up | Up 2 - 12+Y</p>
          <p className='pera'>Tops Legginges Pajamas & More</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28872.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>Chilling In New Fastion | Up To 12+Y</p>
          <p className='pera'>Shop Sweaters,Caps, Footwear & More</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28864.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>Flaunting In Style | Up to 24M</p>
          <p className='pera'>Ethnic Wear,Footwear & Jewellery For...</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28869.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>Deals You Can't Resist | Up 4 to 12Y</p>
          <p className='pera'>Bodysuits, Sets & more</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28855.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>The Cozy Corner | Up 2to 12Y</p>
          <p className='pera'>Sets & Suits, Tees &More</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28868.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>Show-Off-Shoes | Up to 24M</p>
          <p className='pera'>Footwear For Youe kids</p>
        </div>
        </a>
        <a href="#">
        <div className="card">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/28867.webp"
            width="399px"
            alt=""
          />
          <p style={{marginTop:"10px"}}>New Launch</p>
          <p className='pera'>Fristcry Intelliskills</p>
        </div>
        </a>
      
      </div>
      <div className="catagoryCard">
        <div className="catagory">
          <p style={{textAlign:'center'}}>View All Biotiques</p>
        </div>
        <div className="catagory">
          <p style={{textAlign:'center'}}>View All Premium Brands</p>
        </div>
      </div>

 



<div className='mainDiv'>
<div>
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_wedding22_theme_181122_01.jpg"
            alt=""
          />
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_wedding22_theme_181122_02.jpg"
            alt=""
          />
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_wedding22_theme_181122_03.jpg"
            alt=""
          />
        </div>
</div>




      {/* <div className='mainDiv'>
  <div className='Fimage'>
  <img
        src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_447_desktop_SOI_2023_01.jpg"
            alt=""
          />
  </div>
  <div className='d'>
          <img
            className="weddingImage1"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_02.jpg"
            alt=""
          />
          <img
            className="weddingImage1"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_03.jpg"
            alt=""
          />
             <img
            className="weddingImage1"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_04.jpg"
            alt=""
          />
          </div>
        
        </div> */}

        

        <div className='mainDiv2'>
<div className='i1'>
<img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_179_desktop_SOI_2023_05.jpg" alt=""/>
</div>

<div className='allimg3'>


<div className='color'>
<img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_07.jpg" alt=""/>
</div>
<div className='color'>
<img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_06.jpg" alt=""/>
</div>
<div className='color'>
<img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_05.jpg" alt=""/>
</div>
<div className='color'>
<img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_SOI_060123_08.jpg" alt=""/>
</div>
</div>
</div>
      <div className="mainPageMargin">

        {/* Start of Winter Essential */}
        <div className='Winter'>
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_175_desktop_heavywear_281022_04.jpg"
            alt=""
          />
          <div  className="Year"style={{display:"flex",justifyContent:"center"}}>
            <img
             className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_05.jpg"
              alt=""
            />
            <img
               className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_06.jpg"
              alt=""
            />
            <img
               className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_07.jpg"
              alt=""
            />
            <img
               className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_08.jpg"
              alt=""
            />
            <img
               className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_09.jpg"
              alt=""
            />
            <img
               className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_10.jpg"
              alt=""
            />
            <img
               className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_11.jpg"
              alt=""
            />
            <img
               className="age"
              // width="100px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_12.jpg"
              alt=""
            />
          </div>
          <img
            className="weddingImage"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_179_desktop_heavywear_281022_13.jpg"
            alt=""
          />
          {/* End of Winter Essential */}
          <div style={{display:"flex",justifyContent:"center"}}>
            <img
            className="child1"
              // width="200.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_14.jpg"
              alt=""
            />
            <img
                  className="child1"
              // width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_15.jpg"
              alt=""
            />
            <img
                  className="child1"
              // width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_16.jpg"
              alt=""
            />
            <img
                  className="child1"
              // width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_17.jpg"
              alt=""
            />
            <img
                  className="child1"
              // width="254.4px"
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_18.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Beloved Brands */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_164_desktop_nnnnn__heavywear_281022_31.jpg"
          alt=""
        />
        {/* Brands */}
        <div className="brands" >
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_24.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_24.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_24.jpg"
            alt=""
          />
          {/* ....End Of 1st Line.... */}

          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_28.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_29.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg"
            alt=""
          />
          
        {/*...... End of 2nd line...... */}
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_35.jpg"
          alt=""
        />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_36.jpg"
          alt=""
        />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_37.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_38.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/wingsfield_26_09_2022.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_40.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_41.jpg"
          alt=""
          />
        <img
          width="166px"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_42.jpg"
          alt=""
          />
         
        {/* ...End of the 3rd Line */}
        
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_43.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_44.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_new_desktop_spring_12052022_45.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_46_EARTHY_TOUCH.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_47.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_48.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_new_12052022_49.jpg"
            alt=""
          />
          <img
            width="166px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_50.jpg"
            alt=""
          />
        </div>
        {/* ...End of the 3rd Line */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_167_desktop_heavywear_281022_25.jpg"
          alt=""
        />
        {/* .....The Out Wear Edit... */}
        <div className="Kid1" style={{display:"flex",justifyContent:"center"}}>
          <img
             className="child2"
            // width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_20.jpg"
            alt=""
          />
          <img
             className="child2"
            // width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_21.jpg"
            alt=""
          />
          <img
             className="child2"
            // width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_22.jpg"
            alt=""
          />
          <img
             className="child2"
            // width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_23.jpg"
            alt=""
          />
          <img
             className="child2"
            // width="254.4px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_24.jpg"
            alt=""
          />
        </div>
        {/* .....End of The Out Wear Edit... */}
        <img
          className="wed"
          
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_167_desktop_heavywear_281022_25.jpg"
          alt=""
        />
        {/* ....Esential For This session... */}
        <div  className="Kid2"style={{display:"flex",justifyContent:"center"}}>
          <img
               className='child3'
            // width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_25.jpg"
            alt=""
          />
          <img
               className='child3'
            // width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_26.jpg"
            alt=""
          />
          <img
               className='child3'
            // width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_27.jpg"
            alt=""
          />
          <img
               className='child3'
            // width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_28.jpg"
            alt=""
          />
          <img
               className='child3'
            // width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_29.jpg"
            alt=""
          />
          <img
          className='child3'
            // width="212px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_heavywinter_281022_30.jpg"
            alt=""
          />
        </div>
        {/* ...End Of.Esential For This session... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_01.jpg"
          alt=""
        />
        {/* .....Baby Diapers & More.... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_02.jpg"
          alt=""
        />
        <div className="Kid3" style={{display:"flex",justifyContent:"center"}}>
          <img
            // width="182px"
            className='child4'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_03.jpg"
            alt=""
          />
          <img
            className='child4'
            // width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_04.jpg"
            alt=""
          />
          <img
            className='child4'
            // width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_05.jpg"
            alt=""
          />
          <img
            className='child4'
            // width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_06.jpg"
            alt=""
          />
          <img
            className='child4'
            // width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_07.jpg"
            alt=""
          />
          <img
            className='child4'
            // width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_08.jpg"
            alt=""
          />
          <img
          className='child4'
            // width="182px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_09.jpg"
            alt=""
          />
        </div>
        {/* ....Bath & Skin Care..... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_10.jpg"
          alt=""
        />
        <div className="Kid4" style={{display:"flex",justifyContent:"center"}}>
          <img
            // width="182px"
            className='child5'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_11.jpg"
            alt=""
          />
          <img
            // width="182px"
            className='child5'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_12.jpg"
            alt=""
          />
          <img
            // width="182px"
            className='child5'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_13.jpg"
            alt=""
          />
          <img
            // width="182px"
            className='child5'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_14.jpg"
            alt=""
          />
          <img
            // width="182px"
            className='child5'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_15.jpg"
            alt=""
          />
          <img
            // width="182px"
            className='child5'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_16.jpg"
            alt=""
          />
          <img
            // width="182px"
            className='child5'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_essentials_051122_17.jpg"
            alt=""
          />
        </div>
        {/* ....End Of Bath & Skin Care..... */}
        <img
          className="weddingImage"
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_01.jpg"
          alt=""
        />
        {/* ....Feeding Kid's Food.... */}
        <div className="Kid5" style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
          <img
                className='child6'
            // width="159px"
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_02.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_03.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_04.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_05.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_06.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_07.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_08.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_09.jpg"
            alt=""
          />
        </div>
        {/* ....End Of Feeding Kid's Food.... */}
        <div  className="Kid5"style={{display:"flex",justifyContent:"center" }}>
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_10.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_11.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_12.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_13.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_14.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_15.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_16.jpg"
            alt=""
          />
          <img
            // width="159px"
            className='child6'
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_feeding_&_kids_food_051122_17.jpg"
            alt=""
          />
        </div>
      </div>


 






      </div>
</div>  
  
  )
}


export default Main