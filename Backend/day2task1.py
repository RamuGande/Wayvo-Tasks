import mysql.connector as conn
mydb = conn.connect(host='localhost',user='root',passwd='Ramu@1729')
cursor = mydb.cursor()

#cursor.execute("create table day2.members(user_id INT,fname varchar(20),join_date DATE default CURRENT_DATE)")
cursor.execute("Insert into day2.books values(1,'cvcorp','cv',true),(2,'power','murphy',true),(3,'love','juliet',true),(4,'devotion','xyz',true)")
#cursor.execute("Insert into day2.members(user_id,fname) values (200,'Ramu')")
cursor.execute("select * from day2.books")
print(cursor.fetchall())

