<h1> Ecommerce online shop </h1>

Ecommerce online shop is an app allows automatize products purchase via the Internet. It allows to show shop's products, product's search, product's detail view, 
make an order from cart, registration, make profile, leave comments/like products to the products.

<div>
    <ol>
        <li><a href="#architecture">Architecture</a>
            <ol type="1">
                <li><a href="#builtWith">Built with</a></li>
                <li><a href="#frontend">Frontend</a></li>
                <li><a href="#backend">Backend</a></li>
                <li><a href="#database">Database Schema</a></li>
            </ol>
        </li>
        <li><a href="#install">How to install</a>
            <ol type="1">
                <li>Frontend</li>
                <li>Backend</li>
            </ol>
        </li>
    </ol>
</div>

<h1 id="architecture">1. Architecture </h1>
<h3 id="builtWith">Built with:</h3>
<ol>
  <li>HTML</li>
  <li>CSS/SCSS</li>
  <li>JavaScript/<a href='https://reactjs.org/'>React</a></li>
  <li><a href='https://www.djangoproject.com/'>Django</a>/<a href='https://www.django-rest-framework.org/'>DjangoRestFramework</a></li>
  <li>
  <a href='https://www.postgresql.org/'>PostgreSQL</a>
  </li>
</ol>
<h3 id="frontend">Frontend:</h3>
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

<h3 id="backend">Backend:</h3>

Built with additon of Django Framework - <a href='https://www.django-rest-framework.org/'>DjangoRestFramework</a>. 

Library for auth - <a href="https://djoser.readthedocs.io/en/latest/getting_started.html">Djoser</a>(token authoriztion).

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
<h3 id="database">Database Schema </h3>
For storing data were chosen PostgreSQL.

Database Diagram: 

![image](https://user-images.githubusercontent.com/102662863/200765822-8c6ae9b1-cdc1-496c-b3b9-6d5a84bed7d4.png)

<h1 id="install">2. How to install</h1>

<h3>2.1 Installation backend (python+venv+django+postgresql):</h3>
<h4>On unix-like system(ubuntu 22.04)</h4>
<div>
   <ul>
       <li>sudo apt install python3-pip</li>
       <li>sudo apt install python3.10-venv</li>
       <li>sudo apt install postgresql</li>
       <li>pip install psycopg2-binary</li>
   </ul>
   
<h5>Create database</h5>
   <ul>
       <li>sudo su - postgres</li>
       <li>psql</li>
       <li>CREATE DATABASE shop_db;</li>
       <li>alter role postgres with password 'admin';</li>
       <li>(cd shop-app) psql shop_db < data.sql;</li>
    
   </ul>
</div>   

<h5>Create/activate venv</h5>
   <ul>
       <li>cd shop-app/backend/</li>
       <li>sudo python3 -m venv venv</li>
       <li>source venv/bin/activate</li>
       <li>pip install -r requirments.txt</li>
       <li>(cd backend/shop_api/app) python manage.py runserver</li>
   </ul>
Result: 


![image](https://user-images.githubusercontent.com/102662863/201504029-e8a538a9-20b6-44be-aa17-74f1c2ef8c09.png)


<h3>2.2 Installation frontend:</h3>
   <ul>
       <li>sudo apt install npm</li>
       <li>npm install</li>
       <li>sudo apt-get install curl</li>
       <li>sudo npm install -g create-react-app</li>
   </ul>
   
Result:    

![image](https://user-images.githubusercontent.com/102662863/201509627-6e81e991-c892-42ff-ab08-916deede3327.png)



![image](https://user-images.githubusercontent.com/102662863/203721542-9a26a5ca-9de9-48fe-a632-7b3567f4b6bb.png)

![image](https://user-images.githubusercontent.com/102662863/203735925-c6735848-7157-4b64-a488-3e3111e602ff.png)


![image](https://user-images.githubusercontent.com/102662863/203736135-08cac0d7-f49d-4be3-876a-218a8513ff8b.png)

![image](https://user-images.githubusercontent.com/102662863/203737182-8960bdda-8222-49c4-b9dc-c2bcb672a63e.png)

![image](https://user-images.githubusercontent.com/102662863/203736395-2b8ee9f8-90c2-4aba-a5b3-663d2b3e7d82.png)

![image](https://user-images.githubusercontent.com/102662863/203736424-0fecb854-d3ad-4c08-ac19-59fffb3fcfff.png)


![image](https://user-images.githubusercontent.com/102662863/203736861-a6a46abe-4aab-4d5e-ac4e-f476fd114a3a.png)

![image](https://user-images.githubusercontent.com/102662863/203736876-051ce3f0-f7f2-4211-aa22-529b45397b2b.png)
