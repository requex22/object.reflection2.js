export default function destructFunc({special}){
    let result = [];

    special.forEach(item => {
        const {
            id,
            name,
            icon,
            description = 'Описание засекречено'
        } = item;

        result.push({id, name, icon, description})
    });

    console.log(result)
    return result;
}