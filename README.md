# Work Daily Planner

## Overview:

![Screenshot of daily planner.](./Images/dailyplaner.png)

To view the code click here
[click here](https://github.com/Key16/Unit-5-Assignment-Daily-Planner).

To view the website live
[click here](https://key16.github.io/Unit-5-Assignment-Daily-Planner/).

## Description:

There were 3 main components. Count the time down, change the colour depending on which hour you were on the page, and storing the tasks.

### Time 
The time at the to of the daily planner will refresh every second to keep an updated time sheet


### Colour

The colour of the tasks change to blue when its your current hour, green if you haven't reached the time yet, and grey if you've already passed it. Currently its in military hours as it's based off a number calcuation, but the current time is calcuated using moments hour.

### Local storage

Each hour task needed to be uniquely identified with an id so everytime the save button clicks, it will save everythinng into the local storage and overide the old storage. This way, only one save buttonn event needed to be listened to, and any text that is currently in the planer will  be updated at the same time.

