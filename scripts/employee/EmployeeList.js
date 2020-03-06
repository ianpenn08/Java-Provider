import { useEmployee } from "./employeeDataProvider.js"
import Employee from "./Employee.js";

const contentTarget = document.querySelector(".header")

const employeeList = () => {
    // Get the data from the provider
    const employeeObjectsArray = useEmployee()

    // Iterate the array
    for (const employeeObject of employeeObjectsArray) {
        // Convert each object to HTML representation
        const employeeHTMLRepresentation = Employee(employeeObject)
        // Put HTML in DOM
        contentTarget.innerHTML += employeeHTMLRepresentation

    }

}

export default employeeList