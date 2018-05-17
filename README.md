# JSDFinalProject

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|May 1st| Project Description | Incomplete
|May 8th| Wireframes / Priority Matrix / Functional Components | Incomplete
|May 15th| External API(s) Decision / Core Application Structure (HTML, CSS, etc.) | Incomplete
|May 22nd| Minimal Viable Product | Incomplete
|May 29th| Styling / Bug Fixes | Incomplete


## Project Description

Idea: 
Use Mapbox to bring user location history to life on an individual basis, over different intervals of time. Color code venue categories. Output breakdown of categories against one another in a sort of graph(s) -  TBD. 

Benefit: 

Location data displayed in a visual appealing, interactive, and digestible manner. 
Sales enablement in helping clients understand the value in what can be an abstract concept. 
Identify categorical insights, and nearby places of conquesting and activation.

User: 
Sales Team - Driver
Clients - Consumer

Data
Working with team members to gather location data for 3-5 users of the span of 1-2 years. Properties of the data set will include: venue name, lat, long, timestamp, category (all readily available) 

Handling Data
Option 1: Upload datasets to mapbox studio and build them out as layers/classes that I can toggle from the interface. 

Option 2: Format the data as one large object, host it as JSON on a third party like myjson.com

## Wireframes
Google Drive: https://drive.google.com/drive/folders/1N2p5LAFplQw5mRCX3Fsw1_PFAvjuHCMv

## Priority Matrix
Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  



### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

	•	Plot an individual's* locations on a map, color coded by category
	•	Allow user to set an interval of time, that will display locations of that interval on a map
	•	Hover over map points to reveal point info (venue, time, category, and maybe frequency) 
	•	Implement some sort of categorical breakdown in a graph, possibly two 
	•	Allow users to upload a file or paste a csv url, that will populate across the map

	
*for the purpose of this project, im going to curate data for 3-5 five users, though for post-MVP i’d like to connect this a breathing dataset with unlimited data. 

#### PostMVP 

	•	Incorporate a more complex filtering system 
	◦	Sort by brand, day of week, etc. 
	•	Layer two users data on top of one another
	•	Layer two intervals of one user’s data on top of one another (User 1 - Q1 against Q3)
	•	Compare a single user stop against similar nearby venues
	◦	You click on a dunkin donuts stop and all of the nearby coffee shops fade up
	•	Incorporate time of day functionality - points fade up and down over the course of 24 hours like an animation
	•	Highlight over-indexing in charts

## Functional Components

Based on the initial logic defined in the previous  phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Connecting Mapbox | H | 1 hr | 1 hr | 1 hr |
| Pulling Data | H | 1 hr | - | - |
| Format & Host Data | H | 1 hr | - | - |
| Build Out App Nav | H | 4 hr | - | - |
| Basic Map Styling  | H | 1 hr | 1hr | 1hr |
| Build out classes for point styles | H | 2 hr | - | - |
| Plot Points | H | 2 hr | - | - |
| Connect Data to Nav | H | 5 hr | - | - |
| Build out 1 graph style | H | 2 hr | - | - |
| Connect Data to Graph | H | 3 hr | - | - |
| Make it pretty | L | 5hr | - | - |
| Total | - | 22 hrs| - | - |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object