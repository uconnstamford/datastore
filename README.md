#program1.py:


this program loops into a csv file that has column format. As you initialize each column in your csv file, the program will then use it as entities in datastore. Then, after the program runs, each line of text in your csv will be put into datastore, separated by entities, and will be given a key value.


1) create entities in datastore with a kind-name
2) initialize your kind-name
3) open your csv file instead of the example
4) initialize the rows/entities in order, with the rows of your csv file 
5) check datastore to see the data 
---------------------


#program2.py

this program will also loop into a csv file, but does not need column format.However, there is a size cap. This program is meant to send data into datastore in small amounts, with one entity which is 'paragraph'. 

1) create entity in datastore under a new kind-name titled 'paragraph'
2) initialize our kind-name
2) open your csv file instead of example
3) check datastore to see the data
