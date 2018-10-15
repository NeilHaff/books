Requires- 
npm i react-redux
npm i react-native-router-flux

Two main pages - listing and book page. 

Two different types of state stored in Redux.
buy button adds books to the “cart” and shows “In Basket” on product page.
view state is triggered when post is clicked and changes the display on the main listing to focus the user on posts not viewed. 

Future Development 
- Plenty of parts I would tidy and improve the look of. 
- Could display "last viewed” on the main product listing. Could pass the last book viewed as a prop to this component and only display if it “componentDidUpdate". 
- Would make Cart on main listing link back to the page, and add a scroller too incase multiple products, and could be done in React Native Scrollview using scrollTo method. 
- Viewed state currently toggles which doesn’t make much sense but spent about 8 hours so stopped there.  

