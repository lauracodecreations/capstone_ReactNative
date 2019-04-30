# skincare-app

A Barcode Scanner App that reminds you when your products are going to expired.

Maintained by [Laura Barrera Martinez](https://github.com/lauramar6261)

## Product Plan Components
Personal Learning Goals: 
- API calls 
- Mobile Development 
- Making multiple data sources talk to each other

## Problem Statement: 
Facial products don't last forever. Old makeup loses its quality and can even cause irritation and infections if it's used past its expiration date. Keeping track of all the expiration dates of the beauty products can be difficult given that the expiration date is not on the product. Instead, there is a batch code or sometimes a Period After Opening (PAO) symbol. 

I want to create an app that helps the user keep track of their beauty products they owned along with it's expiration date and product details for easy reordering when it expires. 

## Tech Stack
- Front-end: React Native (React iOS and Android)
- Back-end: 
     - Amazon API, Walmart API, or [UPC API](https://www.upcitemdb.com)
     - Google Calendar API
     - React Native barcode scanner 
     - Firebase for data storage or Rails API?
- Infrastructure/Deployment Code: Heroku
- Phone's camara for barcode
- 3 new technologies:
     - React Native 
     - UPC API
     - Expo platform for simulating app in my phone. 

### Demo
[Video](https://drive.google.com/file/d/1OeVzOs338-MU4Kl1x0VThPKHzaEIRr1C/view?usp=sharing)

#### Running demo locally

To run `skincare-app` on your local machince, clone this repo, and run the following commands in your project folder.

```bash
$ brew install node
$ brew install watchman
$ npm install -g react-native-cli
$ npm install --save react-native-elements@beta
$ npm install --save react-native-flash-message
$ npm start
```


