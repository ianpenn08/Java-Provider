const Employee = (employeeObject) => {
    return `
    <section class="employee">

        <div class="employeeInfo">
            <p>First Name: ${employeeObject.firstName}<p>
            <p>Last Name: ${employeeObject.lastName}<p>
            <p>Job Title: ${employeeObject.jobTitle}<p>
            <p>Scheduled hours: ${employeeObject.hoursScheduled}<p>
        </div>
             </section>
     `
}

export default Employee