const Employee = (employeeObject) => {

    return `
    <section>
    </section>
    <section class="employee">
            <div class="employeeInfo">
            <h1> ${employeeObject.firstName} ${employeeObject.lastName}</h1>
            <p>Job Title: ${employeeObject.jobTitle}</p>
            <p>Scheduled hours: ${employeeObject.hoursScheduled}</p>
        </div>
             </section>
     `
}

export default Employee