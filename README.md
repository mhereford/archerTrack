CodeLouisville - FSJS Project: ARCHERTRACK
Author: Mark Hereford
11/18/2016

ArcherTrack is a Single Page Application built on the JavaScript MEAN Stack model.  The JQuery plugin "CanvasJS" is utilized to produce charts displaying some statistics.  Currently the chart is "hard wired" as an example, since the archer scores is not yet complete.

The use of this tool is to allow coaches involved in the National Archery in the Schools Program (NASP) to track their team and tournaments.  They will be able to add
their archers, tournaments and the individual archers results.  The tool will then display some simple, but useful statistics for the coach.  

The list of both Archers and Tournaments allow for dynamic filtering of those lists.


Required modules:

Mongo DB
Mongoose: 4.6.6
Express:  4.14.0
Angular:
Body-Parser: 1.15.2
Nodemon



To Run ArcherTrack:

Start Mongo DB Service
$ mongod

Start Express Server and Application:
$ nodemon src/app.js
 or
$ archerTrack/src.app

Access the App in your browser at :   
localhost:3000





***********MISSING FEATURES/BUGS TO BE FIXED****************

"RESET" button on Add Archer and Add Tournament is not functional.
"DELETE function clears entry from MongoDB, but requires a Refresh to clear from app array.
"SCORES" table not yet editable.
"STATS" Section Not Yet Operational"
Date format mis-match with Mongo ISO date throwing an error in log.
Canvas Js Plugin using static data.  Configure to uses DB data.
