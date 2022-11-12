<h1> Ecommerce online shop </h1>

Ecommerce online shop is an app allows automatize products purchase via the Internet. It allows to show shop's products, product's search, product's detail view, 
make an order from cart, registration, make profile, leave comments/like products to the products.

<h1>Architecture</h1>
<h3>Built with:</h3>
<ol>
  <li>HTML</li>
  <li>CSS/SCSS</li>
  <li>JavaScript/<a href='https://reactjs.org/'>React</a></li>
  <li><a href='https://www.djangoproject.com/'>Django</a>/<a href='https://www.django-rest-framework.org/'>DjangoRestFramework</a></li>
  <li>
  <a href='https://www.postgresql.org/'>PostgreSQL</a>
  </li>
</ol>
<h3>Frontend:</h3>
Bulit with React v.18.2.0 and ReactRouter v.6

src - frontend main app folder

Routes: 
<ol>
  <li> / - main page </li>
  <li> /items - all items page </li>
  <li> /items/:item_slug - item detail page with users comments </li>
  <li> /about - about page </li>
  <li> /signup - signup page </li>
  <li> /login - login page </li>
  <li> /profile - urer's profile page with his personal info and his orders</li>
  <li> /order - order page</li>
</ol>

<h3>Backend:</h3>

Built with additon of Django Framework - Django Rest Framework. 

Library for auth - Djoser(token authoriztion).

API Endpoints: 
<ol>
    <li>'api/items/'</li>
    <li>'api/items/slug:slug/'</li>
    <li>'api/items/slug:slug/update/'</li>
    <li>'api/categories/'</li>
    <li>'api/comments/'</li>
    <li>'api/comments/add/'</li>
    <li>'api/comments/int:pk/'</li>
    <li>'api/profiles/'</li>
    <li>'api/profiles/int:pk/'</li>
    <li>'api/carts/'</li>
    <li>'api/carts/int:pk/'</li>
    <li>'api/carts-items/'</li>
    <li>'api/carts-items/int:pk/'</li>
    <li>'api/orders-items/'</li>
    <li>'api/orders-items/create/'</li>
    <li>'api/orders/'</li>
    <li>'api/orders-statuses/'</li>
    <li>'api/auth/'</li>
</ol>

<h3>Database Schema </h3>
For storing data were chosen PostgreSQL.

Database Diagram: 

![image](https://user-images.githubusercontent.com/102662863/200765822-8c6ae9b1-cdc1-496c-b3b9-6d5a84bed7d4.png)
<h1>Installation</h1>
<h3>Backend:</h3>
<h3>Fronted:</h3>


