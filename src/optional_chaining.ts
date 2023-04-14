type BirthDay = {
    birthday?: Date
}

function getCustomer(id: number): BirthDay | null | undefined {
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined)
    // Optional Property access operator
    console.log("Birthday: ", customer?.birthday?.getFullYear())

// Optional Element access operator
let arr: number[] = []
arr?.[0]

// Optional Call access operator
