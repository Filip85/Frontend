
/*Zadatak 2*/
// const arrayDiff = (a, b) => {
//     let result = a.filter(x => !b.includes(x));
//     return result;
// }

// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]))

/*zadatak 3*/
const data = [
    {
        id: 1, type: 'service', name: 'Service 1', active: true, memberId: 10
    }, {
        id: 2, type: 'service', name: 'Service 2', active: true, memberId: 11
    }, {
        id: 3, type: 'service', name: 'Service 3', active: false, memberId: 10
    }, {
        id: 4, type: 'service', name: 'Service 4', active: true, memberId: 9
    }, {
        id: 5, type: 'deal', name: 'Deal 1', active: false, services: [3, 4]
    }, {
        id: 6, type: 'deal', name: 'Deal 6', active: false, services: [4]
    }, {
        id: 7, type: 'deal', name: 'Deal 7', active: true, services: [1, 3, 4]
    }, {
        id: 8, type: 'member', name: 'Member 1', active: true
    }, {
        id: 9, type: 'member', name: 'Member 2', active: true
    }, {
        id: 10, type: 'member', name: 'Member 3', active: true
    }, {
        id: 11, type: 'member', name: 'Member 4', active: false
    }]


/*Zadatak 3.1.*/
// let activeData = data.filter(x => x.active === true)
// let activeNames = activeData.map(x => x.name)
// console.log(...activeNames)

/*Zadatak 3.2.*/
// let findService = data.find(x => x.name === "Service 3");
// let findMember = data.filter(x => x.id === findService.memberId)
// console.log(findMember[0].name)


/*Zadatak 3.3.*/
let findMember = data.find(x => x.name === "Member 3");
let findService = data.filter(x => x.memberId === findMember.id)
    .map(y => y.id)

let deals = data.filter(x => x.services?.some(y => findService.includes(y)))
    .map(z => z.name) //.join(", ")

// let deals2 = data.map(x => x.services?.some(y => findService.includes(y)))
 
console.log(...deals)

// data.filter(x => {
//     findService.map(element => x.services?.includes(element) ? 
//     deals.add(x.name): "")
// })

// memberIDArray.map(x => {
//     data.filter(element => element.services?.includes(x) ? 
//     deals.add(element.name): "")
// })

// data.filter(x => {
//     memberIDArray.forEach(element => x.hasOwnProperty("services") && x.services.includes(element)? 
//     deals.add(x.name): "")
// })



/*Zadatak 3.4.*/

// let serviceName = []
// let servicesIDArray = data.filter(x => x.services)
//     .map(y => y.services)
//     .flatMap(z => z)

// console.log("dsd", servicesIDArray)

// let servicesList = data.filter(x => x.type === "service")
// let findServices = servicesList.filter(x => !servicesIDArray.includes(x.id))
//     .map(y => y.name)
// console.log(...findServices)

// //2.nacin
// const dealss = data.filter(deal => deal.type === "deal")
//                 .map(deal => deal.services.toString())
//                 .join(",")

// const serv = data.filter(ser => ser.type === "service" 
//                 && !dealss.includes(ser.id))

// console.log(serv)

/*Zadatak 5*/
// let servieMembersId = data.filter(x => x.type === "service");
// let membersId = servieMembersId.map(x => x.memberId)
// console.log(membersId)

// let activeMembers = data.filter(x => x.type === "member" && x.active === false && membersId.includes(x.id))
//     .map(y => y.name)

// console.log(...activeMembers)


// let membersID = data.filter(x => x.type === "service")
//     .map(y => y.memberId);

// let activeMembers = data.filter(x => x.type === "member" 
//     && x.active === false && membersID.includes(x.id))
//     .map(y => y.name)

// console.log(...activeMembers)


// const ages = [32, 33, 16, false, 0];

// let s = ages.filter(a => !a)

// console.log(s)