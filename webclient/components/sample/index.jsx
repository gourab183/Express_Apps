import Child from './child.jsx';
import Child1 from './child1.jsx';
//Export the component, so that by including the Folder, by default the component is exported


//export default Child;




//If your functional module have multiple components and more than one of them have to be exported, follow the object notation to export them

module.exports =  {
   Child: Child,
Child1: Child1
//     // component3: component3,
//     // ..
//     // ..
//     // componentN: componentN,
}