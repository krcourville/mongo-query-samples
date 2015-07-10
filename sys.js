var root = root || this;

root.module = root.module || function( namespace, component) {    
    var currentObject = root;
    namespace.split('.').forEach(function(part){
        if(!currentObject[part]){
            currentObject[part] = {};
        }
        currentObject = currentObject[part];
    });
    Object.extend(currentObject, component);
    return curentObject;
};