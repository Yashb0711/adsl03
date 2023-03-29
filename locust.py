from locust import HttpUser, task


class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):

        self.client.get("/studentLogin")
        self.client.get("/FacultyRegister")
        self.client.get("/Home")
        self.client.get("/RegisterStudent")
        self.client.get("/FacultyRegister")
        self.client.get("/NewCourse")
        self.client.get("/NewDepartment")
        self.client.get("/AllStudents")
        self.client.get("/AllFaculty")
        self.client.get("/ViewCourses")
        self.client.get("/ViewDepartments")
        self.client.get("/StudentView/")
