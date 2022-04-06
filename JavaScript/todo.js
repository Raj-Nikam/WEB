var todos=["Hello"];
var input=prompt("What would you like to do?");
while(input!=="quit")
{
	if(input==="new")
	{
		var newtodo=prompt("Add newtodo");
		todos.push(newtodo);
	}
	else if(input==="list")
	{
		todos.forEach(function(todo,i){
		console.log(i+": "+todo);});
	}
	else if(input==="delete"){
		var ind=prompt("Add ind of todos to delete");
		todos.splice(ind,1);

	}
	input=prompt("What would you like to do?");
}
console.log("OK, I quit the app");
