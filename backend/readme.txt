





POST 
http://127.0.0.1:5000/add

{"title": "( 4 ) uj cikk hozzaadasa",
"article_description": "Ez az ( 4 ) uj cikk amit hozzaadok"}

GET
http://127.0.0.1:5000/getall

http://127.0.0.1:5000/getid1

PATCH
http://127.0.0.1:5000/updateid1

{"title": "updated ( 1 ) cikk hozzaadasa",
"article_description": "Ez az update ( 1 ) cikk amit hozzaadok"}

DELETE
http://127.0.0.1:5000/deleteid1














/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



flask run
set FLASK_APP=app.py   
set FLASK_ENV=development

>>> from app import app, db
>>> app.app_context().push()        https://stackoverflow.com/questions/73961938/flask-sqlalchemy-db-create-all-raises-runtimeerror-working-outside-of-applicats
>>> db.create_all() 
>>> from app import Drink
>>> drink= Drink(name="viz", description="A legjobb szomjoltó")   
>>> drink
viz - A legjobb szomjoltó
>>> db.session.add(drink)
>>> db.session.commit()
>>> Drink.query.all()
[viz - A legjobb szomjoltó]
>>> db.session.add(Drink(name="kóla", description="cukros lötty"))
>>> db.session.commit()
>>> Drink.query.all()
[viz - A legjobb szomjoltó, kóla - cukros lötty]


pip freeze > requirements.txt

install apache2 
https://www.youtube.com/watch?v=Oy52MqsWQdM&list=PLDvInfB8ki_IuB1yuDEZMaCmau50qrVzD&index=12&t=89s

deploy a Flask app on Raspi
https://www.youtube.com/watch?v=w0QDAg85Oow&list=PLDvInfB8ki_IuB1yuDEZMaCmau50qrVzD&index=11


first_article = Article(title="Elso cikk", article_description="Ez az elso cikkem")   


https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/
https://www.fullstackpython.com/flask-sqlalchemy-model-examples.html



