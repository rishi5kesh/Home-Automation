#!/usr/bin/python

import MySQLdb
import serial
import time


# Open database connection
db = MySQLdb.connect("localhost","home","home","home" )
while True:
	ser = serial.Serial("/dev/ttyACM0", 9600,timeout=2)
	# prepare a cursor object using cursor() method
	cursor = db.cursor()

	# execute SQL query using execute() method.
	cursor.execute("SELECT * from Room WHERE roomid=1")

	# Fetch a single row using fetchone() method.
	room1 = cursor.fetchone()
	roomdata=str(room1[0])+str(room1[1])+str(room1[2])+str(room1[3])
	# execute SQL query using execute() method.
	cursor.execute("SELECT * from Room WHERE roomid=2")

	# Fetch a single row using fetchone() method.
	room2 = cursor.fetchone()
	roomdata=roomdata+str(room2[0])+str(room2[1])+str(room2[2])+str(room2[3])

	print "roomdata = %s" % \
	(roomdata)
	ser.write(roomdata)
	readata =ser.readline() 
	print "ard = %s" % \
	(readata)
	readata = readata.replace('\n', '').replace('\r', '')
	cursor.execute("UPDATE Temp SET temp=%s WHERE id=1" %(readata))
	time.sleep(1)
	readata2 =ser.readline() 
	print "ard2 = %s" % \
	(readata2)
	readata2 = readata2.replace('\n', '').replace('\r', '')
	cursor.execute("UPDATE Smoke SET smoke=%s WHERE id=1" %(readata2))
	time.sleep(1)
	db.commit()
	ser.flushInput()
	ser.flushOutput()
	ser.close()
# disconnect from server
db.close()
