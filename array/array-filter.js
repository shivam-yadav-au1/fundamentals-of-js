var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(words => words.length > 6);
console.log(result);

////////////////

let fruits = ['apple','banana','grapes','mango','orange'];

function filterItems(query){
    return fruits.filter(function (item){
       // console.log(item.toLowerCase().indexOf(query.toLowerCase()));
        return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
};
console.log(filterItems('ap'));