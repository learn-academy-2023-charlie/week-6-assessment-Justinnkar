# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
To fix the mistake, I would need to generate a migration to add the foreign key to the students table. The foreign key should be named "cohort_id." It would be added to the Student model as a reference to the Cohort model.

Researched answer: 
To fix this mistake, you can generate a migration file using the rails generate migration command that will add a foreign key to the students table. After generating the migration file you would apply the changes to the database using a rails migrate command to update the database schema. 

2. Which RESTful routes must always be passed params? Why?

Your answer: 
Routes that are used for retrieving a specific resource such as; GET, PATCH, and DELETE. Params must be passed to indicate the exact resource to retrieve.

Researched answer:
There are three key routes that require the use of parameters. The show route, the update route, and the destroy route. By using parameters developers can accurately interact with individual resources, performing actions like retrieving, updating, or deleting specific entities within an application.

3. Name three rails generator commands. What is created by each?

Your answer: 
rails generate model is used to create a new model file. rails generate migration is used to create a migration file. rails generate controlled is used to create a controlled file.

Researched answer:
rails generate model is used to create a new model file. It creates a Ruby class representing a database table. rails generate migration is used to create a migration file. Migractions are used to modify the database schema and this command creates a template for specifying the changes to be made. rails generate controlled is used to create a controlled file. Controllers handle the logic for processing requests and rendering responses.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Controller Method: index
Action: Retrieves and displays a collection of all student records.

action: "POST" location: /students
Controller Method: create
Action: Handles submission of a new student record and performs the necessary actions to save to database.

action: "GET" location: /students/new
Controller Method: new
Action: Renders form for create

action: "GET" location: /students/2
Controller Method: show
Action: Displays the details of the student record with ID of 2.

action: "GET" location: /students/2/edit
Controller Method: edit
Action: Renders form to edit details of student record with ID of 2

action: "PATCH" location: /students/2
Controller Method: update
Action: Makes changes to the database student record with ID of 2

action: "DELETE" location: /students/2
Controller Method: destroy
Action: Deletes student record with ID of 2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1.  As a user, I want to create a new task so that I can keep track of what I need to do.

2.  As a user, I want to edit an existing task so that I can update the details of the task.

3.  As a user, I want to delete a task so that I can remove it from my list.

4.  As a user, I want to mark a task as complete so that I can keep track of what I have done.

5.  As a user, I want to view all my tasks so that I can see everything on my list.

6.  As a user, I want to view only the tasks that are incomplete so that I can focus on what needs to be done.

7.  As a user, I want to view only the tasks that are due today so that I can prioritize my work.

8.  As a user, I want to view only the tasks that are due this week so that I can plan my work.

9.  As a user, I want to view only the tasks that are overdue so that I can catch up on missed work.

10. As a user, I want to receive notifications when a task is due so that I don’t forget about it.
