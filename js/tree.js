
var layoutInfo = {
    startTab: "",
    startNavTab: "tree-tab",

	showTree: true,

    //treeLayout: [["s"],
    //["d"],
   // ["r", "g", "c", "t"]]
    
    

    
}


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
})


