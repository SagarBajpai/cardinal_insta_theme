import React from 'react';
import './Recipes.css';
import _Button from '../utils/Button/_Button';
import RecipeCards from '../utils/RecipeCards/RecipeCards';

const Recipes=(props)=> {
    return (
    <div style={{margin: '40px 0px 40px 40px',padding: '20px 0 20px 20px'}}>
        <div class="section_heading container">
            <div className="row" style={{padding:'0px 60px'}}>
                <div class="col-md-6 section_left_heading">
                        <div className="recipes_left_side_title">
                            <h1>POPULAR <br/>
                            <span class='_recipes'>RECIPES</span>
                            </h1>
                        </div>
                    <_Button name="SEE ALL"/>
                </div>
                <div class="col-md-6 section_right_heading">
                    <h1>DO YOU WANT TO SHAREYOUR OWN RECIPE?</h1>
                    <div style={{float:'right', marginRight:14}}><_Button name="SEND IT NOW"/></div>
                </div>
            </div>
           
        </div>
        <div>
            <div id="myCarousel" class="carousel slide" data-interval="false" data-ride="carousel">
            <div class="carousel-inner container" style={{marginRight:'unset', paddingRight:'unset'}}>
                <div class="item active" style={{float:'right'}}>
                    <div className="cards_container">
                        <RecipeCards 
                          image={"/images/menu_3.jpg"}
                          width= {340}
                          dishname={"CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"}
                          discription= {"Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…"}
                          servings={4}
                          servings_digit_size={36}
                          servings_text_size={24}
                        />
                    </div>
                    <div className="cards_container">
                        <RecipeCards 
                        image={'/images/food_1.jpg'}
                        dishname={'PINEAPPLE FRUIT SALAD WITH FRESH CREAM'}
                        discription={'The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno'}
                        width={230}
                        />    
                    </div>
                    <div className="cards_container" style={{verticalAlign:'bottom'}}>
                        <RecipeCards 
                        image={'/images/food_1.jpg'}
                        dishname={'CHEESE, SPINACH & MUSHROOM STUFFED CHI…'}
                        discription={'The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno'}
                        width={230}
                        />    
                    </div>
                    <div className="cards_container">
                        <RecipeCards 
                        image={'/images/food_1.jpg'}
                        dishname={'FETA AND PEACH COUSCOUS'}
                        discription={'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer.The combination of peaches, feta...'}
                        width={230}
                        />    
                    </div>
                </div>
            <div class="item">
                <div>
                    <div className="cards_container">
                        <RecipeCards 
                          image={"/images/menu_3.jpg"}
                          width= {340}
                          dishname={"CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"}
                          discription= {"Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…"}
                          servings={4}
                          servings_digit_size={36}
                          servings_text_size={24}
                        />   
                    </div>
                </div>              
            </div>
            </div>
                <a class="right carousel-control prev_arrow" href="#myCarousel" data-slide="prev">
                <span style={{fontSize:50}}>&#8592;</span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span style={{fontSize:50}}>&#8594;</span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>   
    </div>
    );
}
export default Recipes;