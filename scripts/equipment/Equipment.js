const Equipment = (equipmentObject) => {
    return `
    <section class="equipment">
    
            <div class="equipmentInfo">
            <h1> ${equipmentObject.model}</h1>
            
            <p>Model #${equipmentObject.serialNumber}</p>
            <p>Working Status: ${equipmentObject.isFunctional}</p>
            <p>Under Warranty: ${equipmentObject.isUnderWarranty}</p>
        </div>
             </section>
     `
}

export default Equipment