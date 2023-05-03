from google.cloud import datastore
import csv
from datetime import datetime
client = datastore.Client()
kind = 'twitter-data'

with open('WSJ_Apple.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    next(csv_reader)
    #loop over the rows
    for row in csv_reader:
        created_at = datetime.strptime(row[1], '%Y-%m-%d %H:%M:%S%z') 
        text = row[2]
        username = row[3]
        retweet_count = int(row[4])
        like_count = int(row[5])
        reply_count = int(row[6])
        entity = datastore.Entity(client.key(kind))
        entity.update({
            "created_at":created_at,
            "text": text,
            "username": username,
            'retweet_count': retweet_count,
            "like_count": like_count,
            "reply_count": reply_count
        })
        client.put(entity)
        
        
   

