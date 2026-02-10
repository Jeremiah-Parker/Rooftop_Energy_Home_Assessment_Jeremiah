function stringReverse(name)
{
 let reverse = '';
for(let i = name.length - 1; i >=0; i--)
{
    reverse += name[i];
}

return reverse;
}
console.log(stringReverse('Hello'));


