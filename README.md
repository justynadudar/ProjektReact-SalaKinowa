# ProjektReact-SalaKinowa
ProjektReact-SalaKinowa is a web application for cinema management.

## Table of contents
* [Technologies](#technologies)
* [Features](#features)
* [Examples of use](#examples-of-use)

## Technologies:
- CSS
- JavaScript
- React
- Node.js

## Features:
- Adding/modifying/deleting films
- Adding/modifying/deleting screenings
- Buying tickets for a selected screening with the possibility of choosing seats

## Examples of use
We have three main tab: Kasa, Seanse, Filmy.
In the Filmy tab we can see all the available movies:
![image](https://user-images.githubusercontent.com/62484042/166706092-0023df36-c52b-4709-9877-957d4d1061fd.png) 

We can add a movie by clicking the button at the beginning of the movie list:
![image](https://user-images.githubusercontent.com/62484042/166706548-b3545424-f2c4-41d4-859c-cede9de79262.png) 

The form validate inserted data. The user is informed when any input has been empty, the given movie time is outside the range (0, 240) and when the given movie poster url ends differently than jpg / jpeg / gif / png / tiff / bmp.
![image](https://user-images.githubusercontent.com/62484042/166707315-d12534cb-9c70-48e6-9f4b-0b6a57d46e18.png)

We can remove a movie by clicking the trash icon next to the movie and edit a movie by clicking the pen icon next to the movie. When we want to edit the movie then the form will be filled with movie data, then if the user wants to make any change it can do this by inserting new data. The form validate inserted data like in adding movie.:
![image](https://user-images.githubusercontent.com/62484042/166707928-58c9bbe7-2211-4997-8662-38bdfc0f1dac.png)



In the Seanse tab we can see showings by the date:
![image](https://user-images.githubusercontent.com/62484042/166711674-b205b86f-8251-4282-b76e-7f7dcb6c23a0.png) 

We can add a showing by clicking the button at the beginning of the showings list:
![image](https://user-images.githubusercontent.com/62484042/166711792-930a341a-b4b8-4434-949f-a104537ef9e5.png) 

The form validate inserted data. The user can choose movie only from the available movies and the date cannot be in the past.:
![image](https://user-images.githubusercontent.com/62484042/166711882-890c4d5c-6fdb-42ca-8526-c4a6c2df15b0.png) 
![image](https://user-images.githubusercontent.com/62484042/166712115-a044aab4-fd72-4c65-b795-259ef2f326d8.png) 

We can remove a showing by clicking the trash icon next to the showing and we can edit a showing by clicking the showing time . When we want to edit the showing then the form will be filled with showing data, then if the user wants to make any change it can do this by inserting new data. The form validate inserted data like in adding showing.:
![image](https://user-images.githubusercontent.com/62484042/166712233-a8b1eb82-fcca-4023-84ac-d7f4021e00ea.png) 



In the Kasa tab we can see showings by the date like in Seanse tab, but there the showing time directs us to buy tickets for this concrete showing:
![image](https://user-images.githubusercontent.com/62484042/166712344-17a93e35-81ce-468d-832e-75cb61bf941f.png) 

To buy the ticket we must choose a place and click OK. If the place is taken the user can see red seat with X:
 ![image](https://user-images.githubusercontent.com/62484042/166712585-7e6e6042-e1b3-430d-baca-6f2c6da3b5af.png) 
