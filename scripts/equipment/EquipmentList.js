import Equipment from "./Equipment.js"
import {useEquipment} from "./equipmentDataProvider.js"

const contentTarget = document.querySelector(".container1")

const equipmentList = () => {
    const equipmentObjectsArray = useEquipment()

    for (const equipmentObject of equipmentObjectsArray) {
        const equipmentHTMLRep = Equipment(equipmentObject)

        contentTarget.innerHTML += equipmentHTMLRep
    }
}

export default equipmentList