# Photography For Enthusiasts

You just got your first camera and you're not sure what to get for it. Or maybe you dont even have a camera but you're
into photography. Well that's what this project is for. The inspiration for this project stems from my interest in photography
and how I wasnt quite sure where to start. The goal for this project is to inspire amatures and beginners alike, to provide a 
simple list of photography products, and to provide shooting locations. There will be 4 pages to this site, the home page which will consist of 
a moderate photo gallery, a supplies page for all of the available items,the locations page to see different shooting spots, and the cart page 
where the user should be able to view their selected products.


 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how 
your project is the best way to help them achieve these things.

The main purpose of this website is to provide inspiration to new and returning users as well as providing a simple 
means for which the user can view and or purchase cameras and camera gear should they wish. To achieve these goals, the wedsite
is broken down into 4 pages which can easily be distinguished via the tabs at the top of the page which will lead the users to
the respective areas of the site upon clicking them. These pages include a gallery, a map, and supplies page to showcase different 
equipment to choose from.  

### User Stories
- As a new user, I want to be able to easily navigate the website's gallery and map section
- As a new user, I want to be able to click on the footer links and they take me to their designated sites
- As a general user, I want to be able to zoom in and out on locations on the map
- As a general or new user, I want the 'add to cart' links to add items to the cart
- As a general user, I want my cart item count to be seen on the site
- As a general user, I want the check out button to complete my purchase

![homepage image](https://github.com/Alonta34/photographyForEnthusiasts/raw/master/assets/Images/home-page.png)
![supplies page image](https://github.com/Alonta34/photographyForEnthusiasts/raw/master/assets/Images/supplies-page.png)
![mappage image](https://github.com/Alonta34/photographyForEnthusiasts/raw/master/assets/Images/map-page.png)
![cartpage image](https://github.com/Alonta34/photographyForEnthusiasts/raw/master/assets/Images/cart-page.png)



## Wireframes

There were originally three wireframes but during the development process the addition of a cart page with a 
simple checkout system was discussed between myself and my peer mentor, Arnold Kyeza. 

The Location page was also changed from what is seen in the wire frame from a series of pictures to a full
map rendering to showcase the different locations.


![wireframe homepage image](https://github.com/Alonta34/photographyForEnthusiasts/raw/master/assets/Images/wireframe-home-page.png)
![wireframe suppliespage image](https://github.com/Alonta34/photographyForEnthusiasts/raw/master/assets/Images/wireframe-supplies-page.png)
![wireframe mappage image](https://github.com/Alonta34/photographyForEnthusiasts/raw/master/assets/Images/wireframe-map-page.png)




## Features
 
### Existing Features

- The Home Page - Allows the user to browse through a selection of pictures via a gallery
- The Supplies Page - Allows users to browse and click through a selection of products to purchase
- The Locations Page - Allows users to browse through relevant shooting locations via a map rendering
- The Supply Links - Allows users to click the product they want and add it to the cart
- The Map Points - Allows users to see the exact points of interest on the map
- The Checkout Button - Allows the user to complete their checkout purchase
- The Footer Links - Allows the user to go to selected social media and photography based sites
- The Navigation Links - Aloows the user to easily navigate the different pages of the site



### Features Left to Implement
- Remove Buttons - A feature to add in the future to allow the user to remove a given set of items in the cart that they may decide they don't want
- Increment arrows - Arrows that allow the user to increase and decrease the number of items in the cart with out having to go back to the supplies page
- Clickable Map Point - These points, when clicked should show the area name to the user

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses JQuery to simplify DOM manipulation.

- [Javascript](https://jquery.com)
    - This project uses Javascript to to render the map and locations on the site as well provide functionality for the cart system.

- [HTML5]
    - HTML5 was used to create the structure of the website.

- [CSS]
    - CSS was used for the styling of the project.

- [Bootstrap](https://jquery.com)
    - Bootstrap was used to easily create and manage page sections on the website.

- [Lucidchart](https://jquery.com)
    - Lucid chart was used to create the wire frame template for the project.

- [GoogleFonts](https://jquery.com)
    - Google Fonts was used to provide any text font used in the project.

- [FontAwesome](https://jquery.com)
    - All icons on the website were taken from and provided by Font Awesome.

- [Google Maps API](https://console.cloud.google.com/apis/credentials?project=positive-shell-299821&supportedpurview=project)
    - The map rendering on the locations page was provided by using the features from the Google Cloud API system.

## Testing

Testing was done manually by myself via different devices to ensure that all features worked adequately across all platforms.
Project is designed to hold all the same qualities on mobile devices as it does on a full webpage, so everything works the exact
same across all devices.

1. Navigation:
    1. Opened browser to make sure the site on the browser
    2. Clicked each navigation tab to ensure they sent the user to the respective destination
    3. Opened browser on other mobile devices to ensure that the site worked properly on devices outside of a laptop
    4. Repeated the process of clicking each navigation tab to be sure that they worked on mobile devices as well

2. Supplies Page:
    1. Go to the "Supplies" page
    2. Click on desired products to make sure it is added to the cart
    3. Look at the cart tab to confirm that desired products were added to the cart
    4. Click on the cart tab to confirm that desired products were added to the cart

3. Cart/Checkout:
    1. Go to the "Cart" page
    2. Check to see that all desired products are in the cart
    3. Click the checkout button to check that alert pops up
    4. Click the 'ok' tab to make sure that purchase is completed and cart is cleared of all previous products

4. Footer Links:
    1. Scroll down to the footer section of the site
    2. Click on each link to make sure that they send user to the desired site
    3. Return to main site to ensure that the site is still up and running



    ## Devices Used

    1. iPhone XR
    2. Macbook Air
    3. iPhone 7
    4. iPhone 11
    5. iPhone 7 
    6. LG Stylus 5
    7. iPad
    8. iPad Pro



## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

## Validation
- Files were validated by directly inputing them into the validator using (https://www.w3.org/)


## Credits
- The credit for most of the cart page belongs to series of YouTube videos and my peer mentor, Arnold Kyeza
    because I defenitely had a bit of trouble starting off. Here are the links to the videos that helped 
    with the cart development process: 

    [YouTube: Telmo Sampio](https://www.youtube.com/watch?v=B20Getj_Zk4&list=PLD9SRxG6ST3HignjcXUX6w8RcT0_b5ihV)
    
    [YouTube: Web Dev Simplified](https://www.youtube.com/watch?v=YeFzkC2awTM)




### Media
- The photos used for this project were obtained from 
    [Unsplash website](https://unsplash.com/) and [Pexels website](https://www.pexels.com/)

### Acknowledgements

- I received inspiration for certain parts of the project (specifically the map) from the code institue mini
  project as well as from my peer mentor Arnold Kyeza. There was also aid i received from
  research that involved using coding strategies that i found on YouTube. The credits can
  be found in the above 'Credits Section'
