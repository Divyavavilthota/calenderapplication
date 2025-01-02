#Calender Application For communication Tracking
## Features

- **Monthly Calendar View:** Displays all months with clickable dates.  
- **To-Do Tasks:** Add tasks for each specific date to track communication plans.  
- **Daily Ratings:** Mark each day as "good" or "not good" based on how the communication went.  
- **User-Friendly Navigation:** Simple navigation bar to switch between different application sections.  

---
## Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Styling:** Tailwind CSS or SCSS  

---
## Setup and Installation
# For Client
cd client
npm install

# For Server
cd ../server
npm install


# FRONT END(Client)
Step 1.Create a React APP Client
 
Here We create  WEB Pages  Uisng REACT.JS
1.NAVBAR
2.HOME
2.ADMIN
3.DASHBOARD
4.ANALYTICS
5.CALENDER
6.USER
# Nav Bar and HOME page

![Homepage](image.png)

# ADMIN PAGE

In Admin page The Company people add their details about their Comapany and if they Click Add Company Button then it will show the details of the company and we can Edit and Delete the Companies,And we can Save the Details
Here are the Related Pictures..
![Admin_Page](image-2.png)
After Clicking The Add Comapany Button it will give the Notification that the "Comapny Addedd Successfully.
![Notification](image-3.png)
The If we want to EDIT or Delete we can Perform
![Company_list](image-4.png)
If we Click on EDIT Button
![Edit](image-5.png)
If we Click on Delete Button
![Delete](image-6.png)
If we Click on Ok
![Notification_Delete](image-7.png)

# USER Page
In User Page We will see all the details of the company like the Company Name,Last Five Communications,Next Scheduled Communications,Status,Actions,And we will write the notes too
-- We can see the Overdue(Red) and Due Today(Yellow) with their respective Colours.
![User_Page](image-8.png)

If we click on Write Notes.We will Write the notes.
![Notes](image-9.png)

# Calender Page
In this Calender Page  we will see all the  Overdue Communications With Specified Date and Company_name And Upcoming Communications.
And it will show the color too in which Overdue indicated in red Color and Due Today will Be Indicated in Yellow Color.
![Calender](image-10.png)

# Analytics Page
# Communication Frequesncy Report:
1.A visual representation (e.g., bar chart or pie chart) showing the frequency of each communication method (e.g., LinkedIn Post, Email) used over a selected time frame.
2.Users can filter by company, date range, or communication method.
# Engagement Effectiveness Dashboard:
1.Track and display which communication methods are most effective in terms of response or follow-up actions.
2.Include metrics like the percentage of successful responses to emails, phone calls, or LinkedIn messages.
![Analytics](image-11.png)

# Back-End(Server):
We need to connect to the Database using MongoDB
Install The dependencies
install the mongodb on your Server
npm install mongoose
We need to connect to the mongodb server using mongoose.connect()
# Set up the Server
Add the Environment Variables using .env file

MONGO_URI=mongodb://localhost:27017/yourDatabaseName

Now Add the Routes:
To handle The CRUD operations for MONGODB,create routes
Add Schema for each and every Collection Name

# To Start the Server(Test the server)
node server.js


