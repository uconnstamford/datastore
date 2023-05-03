from google.cloud import datastore
import csv
from datetime import datetime

client = datastore.Client()
kind = 'fec-data'

with open('sec_data.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    # loop over the rows
    for row in csv_reader:
        for paragraph in row:
            entity = datastore.Entity(key=client.key(kind))
            entity.update({
            'text': paragraph
            })
        client.put(entity)



