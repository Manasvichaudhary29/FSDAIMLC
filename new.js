const employee = {
    empId: 1,
    name: "john",
    designation: "software engineer",

    techstack: [
        {
            plang: "java",
            server: "apache tomcat",
            database: "mysql",
            database2: "mongodb"
        },
        {
            plang: "python",
            server: "django",
            database: "mysql",
            database2: "mongodb"
        },
        {
            plang: "react",
            server: "node server",
            database: "mysql",
            database2: "mongodb"
        }
    ]
};

console.log(employee.techstack[0].server);